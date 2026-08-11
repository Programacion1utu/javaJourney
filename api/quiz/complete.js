import { getDb } from '../../lib/db.js';
import { requireStudent } from '../../lib/auth.js';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).end();

  let student;
  try {
    student = requireStudent(req);
  } catch {
    return res.status(401).json({ error: 'No autorizado' });
  }

  const { topicId, score } = req.body;
  if (!topicId || score === undefined)
    return res.status(400).json({ error: 'Faltan datos' });

  try {
    const sql = getDb();
    await sql`
      INSERT INTO quiz_progress (student_id, topic_id, score)
      VALUES (${student.id}, ${topicId}, ${score})
      ON CONFLICT (student_id, topic_id)
      DO UPDATE SET score = GREATEST(quiz_progress.score, ${score}), completed_at = NOW()
    `;
    res.json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error interno' });
  }
}
