import { getDb } from '../lib/db.js';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'GET') return res.status(405).end();

  try {
    const sql = getDb();
    const rows = await sql`SELECT value FROM config WHERE key = 'enabled_topics'`;
    const enabledTopics = rows[0]?.value ?? [1];
    res.json({ enabledTopics });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error interno' });
  }
}
