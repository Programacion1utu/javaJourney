const { hashPassword, signTeacher } = require('../../lib/auth');

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  try {
    const { password } = req.body;
    if (!password) return res.status(400).json({ error: 'Contraseña requerida' });

    const hash = hashPassword(password);
    if (hash !== process.env.TEACHER_PASSWORD_HASH)
      return res.status(401).json({ error: 'Contraseña incorrecta' });

    const token = signTeacher();
    res.status(200).json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error interno' });
  }
};
