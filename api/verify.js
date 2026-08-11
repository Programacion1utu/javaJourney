const { getDb } = require('../lib/db');
const { requireStudent } = require('../lib/auth');
const { EXPECTED_OUTPUTS } = require('../lib/expected-outputs');

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  try {
    const student = requireStudent(req);
    const { lessonId, output } = req.body;
    const expected = EXPECTED_OUTPUTS[lessonId];
    if (!expected) return res.status(400).json({ error: 'Lección no encontrada' });

    const normalize = s => s.replace(/\r\n/g, '\n').trim();
    const correct = normalize(output) === normalize(expected);

    if (correct) {
      const sql = getDb();
      await sql`
        INSERT INTO lesson_progress (student_id, lesson_id)
        VALUES (${student.id}, ${lessonId})
        ON CONFLICT DO NOTHING
      `;
    }
    res.status(200).json({ correct });
  } catch (err) {
    console.error(err);
    const status = err.message === 'No autorizado' ? 401 : 500;
    res.status(status).json({ error: err.message });
  }
};
