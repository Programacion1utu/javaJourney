const { getDb } = require('../lib/db');

module.exports = async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).end();
  try {
    const sql = getDb();
    const rows = await sql`SELECT value FROM config WHERE key = 'enabled_topics'`;
    const enabledTopics = rows.length ? rows[0].value : [1];
    res.setHeader('Cache-Control', 'no-store');
    res.status(200).json({ enabledTopics });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error interno' });
  }
};
