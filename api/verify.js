const { getDb } = require('../lib/db');
const { requireStudent } = require('../lib/auth');
const { EXPECTED_OUTPUTS } = require('../lib/expected-outputs');

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  // ── EJECUTAR CÓDIGO ──────────────────────────────────────────────────────────
  if (req.body && req.body.code !== undefined) {
    const { code, stdin } = req.body;
    try {
      const response = await fetch('https://wandbox.org/api/compile.json', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          compiler: 'openjdk-jdk-22+36',
          code: code.replace(/public\s+class\s+Main/, 'class Main'),
          stdin: stdin || '',
          'runtime-option-raw': '-Dfile.encoding=UTF-8 -Dstdout.encoding=UTF-8'
        })
      });
      if (!response.ok) {
        const txt = await response.text();
        return res.status(502).json({ error: 'Wandbox error ' + response.status, detail: txt });
      }
      const data = await response.json();
      return res.status(200).json({
        stdout: (data.program_output || '').trim(),
        stderr: (data.program_error || '').trim(),
        compileErr: (data.compiler_error || '').trim()
      });
    } catch (e) {
      return res.status(500).json({ error: e.message });
    }
  }

  // ── VERIFICAR SALIDA ─────────────────────────────────────────────────────────
  try {
    const student = requireStudent(req);
    const { lessonId, output } = req.body;
    const expected = EXPECTED_OUTPUTS[lessonId];
    if (!expected) return res.status(400).json({ error: 'Lección no encontrada' });

    const normalize = s => s.replace(/\r\n/g, '\n').trim();
    const correct = normalize(output) === normalize(expected);

    if (correct) {
      const sql = getDb();
      await sql`
        INSERT INTO lesson_progress (student_id, lesson_id)
        VALUES (${student.id}, ${lessonId})
        ON CONFLICT DO NOTHING
      `;
    }
    res.status(200).json({ correct });
  } catch (err) {
    console.error(err);
    const status = err.message === 'No autorizado' ? 401 : 500;
    res.status(status).json({ error: err.message });
  }
};
