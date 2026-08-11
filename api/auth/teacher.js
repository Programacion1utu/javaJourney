import { hashPassword, signTeacher } from '../../lib/auth.js';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).end();

  const { password } = req.body;
  if (!password) return res.status(400).json({ error: 'Falta la contraseña' });

  const hash = hashPassword(password);
  if (hash !== process.env.TEACHER_PASSWORD_HASH)
    return res.status(401).json({ error: 'Contraseña incorrecta' });

  const token = signTeacher();
  res.json({ token });
}
