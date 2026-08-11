const { getDb } = require('../../lib/db');
const { requireStudent } = require('../../lib/auth');

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  try {
    const student = requireStudent(req);
    const { topicId, score } = req.body;
    if (topicId == null || score == null)
      return res.status(400).json({ error: 'Datos incompletos' });

    const sql = getDb();
    await sql`
      INSERT INTO quiz_progress (student_id, topic_id, score)
      VALUES (${student.id}, ${topicId}, ${score})
      ON CONFLICT (student_id, topic_id)
      DO UPDATE SET score = GREATEST(quiz_progress.score, ${score})
    `;
    res.status(200).json({ ok: true });
  } catch (err) {
    console.error(err);
    const status = err.message === 'No autorizado' ? 401 : 500;
    res.status(status).json({ error: err.message });
  }
};
