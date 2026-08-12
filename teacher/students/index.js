const { getDb } = require('../../../lib/db');
const { requireTeacher, hashPassword } = require('../../../lib/auth');

module.exports = async function handler(req, res) {
  try {
    requireTeacher(req);
  } catch {
    return res.status(401).json({ error: 'No autorizado' });
  }

  const sql = getDb();

  if (req.method === 'GET') {
    try {
      const rows = await sql`
        SELECT s.id, s.nombre, s.apellido, s.grupo, s.created_at, s.last_access,
          COUNT(DISTINCT lp.lesson_id) AS lessons_completed,
          COUNT(DISTINCT qp.topic_id) AS quizzes_completed,
          ROUND(AVG(qp.score))::int AS quiz_avg_score,
          json_agg(json_build_object('topicId', qp.topic_id, 'score', qp.score)
            ORDER BY qp.completed_at)
            FILTER (WHERE qp.topic_id IS NOT NULL) AS quiz_details
        FROM students s
        LEFT JOIN lesson_progress lp ON lp.student_id = s.id
        LEFT JOIN quiz_progress qp ON qp.student_id = s.id
        GROUP BY s.id
        ORDER BY s.apellido, s.nombre
      `;
      res.status(200).json(rows);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Error interno' });
    }

  } else if (req.method === 'POST') {
    try {
      const { nombre, apellido, grupo, password } = req.body;
      if (!nombre || !apellido || !grupo || !password)
        return res.status(400).json({ error: 'Datos incompletos' });

      const hash = hashPassword(password);
      const rows = await sql`
        INSERT INTO students (nombre, apellido, grupo, password_hash)
        VALUES (${nombre.trim()}, ${apellido.trim()}, ${grupo.trim()}, ${hash})
        RETURNING id, nombre, apellido, grupo, created_at
      `;
      res.status(201).json(rows[0]);
    } catch (err) {
      console.error(err);
      if (err.code === '23505')
        return res.status(409).json({ error: 'El estudiante ya existe' });
      res.status(500).json({ error: 'Error interno' });
    }

  } else {
    res.status(405).end();
  }
};
