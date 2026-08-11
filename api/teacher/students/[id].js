import { getDb } from '../../../lib/db.js';
import { requireTeacher, hashPassword } from '../../../lib/auth.js';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(200).end();

  try { requireTeacher(req); } catch { return res.status(401).json({ error: 'No autorizado' }); }

  const { id } = req.query;
  const sql = getDb();

  // DELETE — eliminar estudiante y su progreso (CASCADE)
  if (req.method === 'DELETE') {
    await sql`DELETE FROM students WHERE id = ${id}`;
    return res.json({ ok: true });
  }

  // PUT — resetear contraseña
  if (req.method === 'PUT') {
    const { password } = req.body;
    if (!password) return res.status(400).json({ error: 'Falta la nueva contraseña' });
    await sql`UPDATE students SET password_hash = ${hashPassword(password)} WHERE id = ${id}`;
    return res.json({ ok: true });
  }

  res.status(405).end();
}
