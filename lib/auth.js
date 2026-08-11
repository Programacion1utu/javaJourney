import jwt from 'jsonwebtoken';
import { createHash } from 'crypto';

const SECRET = process.env.JWT_SECRET;

export function hashPassword(pw) {
  return createHash('sha256').update(pw).digest('hex');
}

export function signStudent(student) {
  return jwt.sign(
    { role: 'student', id: student.id, nombre: student.nombre, apellido: student.apellido, grupo: student.grupo },
    SECRET,
    { expiresIn: '7d' }
  );
}

export function signTeacher() {
  return jwt.sign({ role: 'teacher' }, SECRET, { expiresIn: '8h' });
}

export function verifyToken(token) {
  return jwt.verify(token, SECRET);
}

export function requireStudent(req) {
  const auth = req.headers.authorization || '';
  const token = auth.replace('Bearer ', '');
  const payload = verifyToken(token);
  if (payload.role !== 'student') throw new Error('No autorizado');
  return payload;
}

export function requireTeacher(req) {
  const auth = req.headers.authorization || '';
  const token = auth.replace('Bearer ', '');
  const payload = verifyToken(token);
  if (payload.role !== 'teacher') throw new Error('No autorizado');
  return payload;
}
