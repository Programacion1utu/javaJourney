import { getDb } from '../../lib/db.js';
import { hashPassword, signStudent } from '../../lib/auth.js';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).end();

  const { nombre, apellido, password } = req.body;
  if (!nombre || !apellido || !password)
    return res.status(400).json({ error: 'Faltan datos' });

  try {
    const sql = getDb();
    const hash = hashPassword(password);

    const rows = await sql`
      SELECT id, nombre, apellido, grupo
      FROM students
      WHERE LOWER(nombre) = LOWER(${nombre.trim()})
        AND LOWER(apellido) = LOWER(${apellido.trim()})
        AND password_hash = ${hash}
    `;

    if (rows.length === 0)
      return res.status(401).json({ error: 'Credenciales incorrectas' });

    const student = rows[0];

    // Actualizar último acceso
    await sql`UPDATE students SET last_access = NOW() WHERE id = ${student.id}`;

    const token = signStudent(student);
    res.json({ token, student: { id: student.id, nombre: student.nombre, apellido: student.apellido, grupo: student.grupo } });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error interno' });
  }
}
