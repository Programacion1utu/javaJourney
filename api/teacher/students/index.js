import { getDb } from '../../../lib/db.js';
import { requireTeacher, hashPassword } from '../../../lib/auth.js';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(200).end();

  try { requireTeacher(req); } catch { return res.status(401).json({ error: 'No autorizado' }); }

  const sql = getDb();

  // GET — listar todos los estudiantes con su progreso
  if (req.method === 'GET') {
    const students = await sql`
      SELECT
        s.id, s.nombre, s.apellido, s.grupo,
        s.created_at, s.last_access,
        COUNT(DISTINCT lp.lesson_id) AS lessons_done,
        COUNT(DISTINCT qp.topic_id)  AS quizzes_done
      FROM students s
      LEFT JOIN lesson_progress lp ON lp.student_id = s.id
      LEFT JOIN quiz_progress   qp ON qp.student_id = s.id
      GROUP BY s.id
      ORDER BY s.apellido, s.nombre
    `;
    return res.json({ students });
  }

  // POST — crear estudiante
  if (req.method === 'POST') {
    const { nombre, apellido, grupo, password } = req.body;
    if (!nombre || !apellido || !grupo || !password)
      return res.status(400).json({ error: 'Faltan campos' });

    try {
      const rows = await sql`
        INSERT INTO students (nombre, apellido, grupo, password_hash)
        VALUES (${nombre.trim()}, ${apellido.trim()}, ${grupo.trim()}, ${hashPassword(password)})
        RETURNING id, nombre, apellido, grupo
      `;
      return res.status(201).json({ student: rows[0] });
    } catch (err) {
      if (err.code === '23505') // unique violation
        return res.status(409).json({ error: 'Ya existe un estudiante con ese nombre y apellido' });
      throw err;
    }
  }

  res.status(405).end();
}
