import { getDb } from '../../lib/db.js';
import { requireTeacher } from '../../lib/auth.js';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'PUT') return res.status(405).end();

  try { requireTeacher(req); } catch { return res.status(401).json({ error: 'No autorizado' }); }

  const { enabledTopics } = req.body;
  if (!Array.isArray(enabledTopics))
    return res.status(400).json({ error: 'enabledTopics debe ser un array' });

  const sql = getDb();
  await sql`
    INSERT INTO config (key, value) VALUES ('enabled_topics', ${JSON.stringify(enabledTopics)})
    ON CONFLICT (key) DO UPDATE SET value = ${JSON.stringify(enabledTopics)}
  `;
  res.json({ ok: true });
}
