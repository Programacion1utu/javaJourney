const { createHash } = require('crypto');
const { getDb } = require('./_lib/db');
const { requireStudent } = require('./_lib/auth');
const { EXPECTED_OUTPUT_HASHES } = require('./_lib/expected-outputs');

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  // ── EJECUTAR CÓDIGO ──────────────────────────────────────────────────────────
  if (req.body && req.body.code !== undefined) {
    const { code, stdin } = req.body;
    const wandboxBody = JSON.stringify({
      compiler: 'openjdk-jdk-22+36',
      code: code.replace(/public\s+class\s+Main/, 'class Main'),
      stdin: stdin || '',
      'runtime-option-raw': '-Dfile.encoding=UTF-8 -Dstdout.encoding=UTF-8'
    });

    const callWandbox = async () => {
      const r = await fetch('https://wandbox.org/api/compile.json', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: wandboxBody
      });
      if (!r.ok) throw new Error('HTTP ' + r.status);
      return r.json();
    };

    try {
      let data;
      try {
        data = await callWandbox();
      } catch (firstErr) {
        console.error('Wandbox intento 1 falló:', firstErr && firstErr.message ? firstErr.message : firstErr);
        // Reintento único tras 1.5s si falla
        await new Promise(r => setTimeout(r, 1500));
        data = await callWandbox();
      }

      const stdout = (data.program_output || '').trim();
      const stderr = (data.program_error || '').trim();
      const compileErr = (data.compiler_error || '').trim();

      // Error de recursos de Wandbox → mensaje amigable
      const isResourceErr = stderr.includes('OCI') || stderr.includes('crun') || stdout.includes('OCI');
      if (isResourceErr) {
        return res.status(503).json({ error: 'Servidor ocupado. Intentar de nuevo en unos segundos.' });
      }

      return res.status(200).json({ stdout, stderr, compileErr });
    } catch (e) {
      console.error('Wandbox no disponible tras reintento:', e && e.message ? e.message : e);
      return res.status(503).json({ error: 'El servidor de ejecución no está disponible. Intentar de nuevo.' });
    }
  }

  // ── VERIFICAR SALIDA ─────────────────────────────────────────────────────────
  try {
    const student = requireStudent(req);
    const { lessonId, output } = req.body;
    const expectedHash = EXPECTED_OUTPUT_HASHES[lessonId];
    if (!expectedHash) return res.status(400).json({ error: 'Lección no encontrada' });

    const normalize = s => s.replace(/\r\n/g, '\n').trim();
    const outputHash = createHash('sha256').update(normalize(output || '')).digest('hex');
    const correct = outputHash === expectedHash;

    if (correct) {
      const sql = getDb();
      await sql`
        INSERT INTO lesson_progress (student_id, lesson_id)
        VALUES (${student.id}, ${lessonId})
        ON CONFLICT DO NOTHING
      `;
    }
    // Nunca devolver la salida esperada: un intento fallido no debe filtrar la respuesta.
    res.status(200).json({ correct });
  } catch (err) {
    console.error(err);
    const status = err.message === 'No autorizado' ? 401 : 500;
    res.status(status).json({ error: err.message });
  }
};
