import { getDb } from '../../lib/db.js';
import { requireStudent } from '../../lib/auth.js';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(200).end();

  let student;
  try {
    student = requireStudent(req);
  } catch {
    return res.status(401).json({ error: 'No autorizado' });
  }

  const sql = getDb();

  if (req.method === 'GET') {
    const lessons = await sql`SELECT lesson_id FROM lesson_progress WHERE student_id = ${student.id}`;
    const quizzes = await sql`SELECT topic_id, score FROM quiz_progress WHERE student_id = ${student.id}`;
    return res.json({
      completedLessons: lessons.map(r => r.lesson_id),
      completedQuizzes: quizzes.map(r => ({ topicId: r.topic_id, score: r.score })),
    });
  }

  res.status(405).end();
}
