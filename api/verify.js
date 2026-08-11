import { getDb } from '../lib/db.js';
import { requireStudent } from '../lib/auth.js';
import { EXPECTED_OUTPUTS } from '../lib/expected-outputs.js';

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

  const { lessonId, output } = req.body;
  if (!lessonId || output === undefined)
    return res.status(400).json({ error: 'Faltan datos' });

  const expected = EXPECTED_OUTPUTS[lessonId];

  // Lección sin output esperado (Scanner/Random): siempre correcta si hay output
  if (expected === undefined) {
    return res.json({ correct: true, noVerification: true });
  }

  const normalize = s => s.replace(/\r\n/g, '\n').trimEnd();
  const correct = normalize(output) === normalize(expected);

  if (correct) {
    try {
      const sql = getDb();
      await sql`
        INSERT INTO lesson_progress (student_id, lesson_id)
        VALUES (${student.id}, ${lessonId})
        ON CONFLICT DO NOTHING
      `;
    } catch (err) {
      console.error(err);
    }
  }

  res.json({ correct });
}
