module.exports = async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { code, stdin } = req.body;
  if (!code) return res.status(400).json({ error: 'Sin código' });

  try {
    const response = await fetch('https://emkc.org/api/v2/piston/execute', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        language: 'java',
        version: '*',
        files: [{ name: 'Main.java', content: code }],
        stdin: stdin || ''
      })
    });

    if (!response.ok) {
      // Piston falló — intentar con Glot.io como fallback
      return await runWithGlot(code, stdin, res);
    }

    const data = await response.json();
    const compileErr = (data.compile?.stderr || '').trim();
    const stdout = (data.run?.stdout || data.run?.output || '').trim();
    const stderr = (data.run?.stderr || '').trim();

    res.status(200).json({ stdout, stderr, compileErr });
  } catch {
    return await runWithGlot(code, stdin, res);
  }
};

async function runWithGlot(code, stdin, res) {
  try {
    const response = await fetch('https://glot.io/api/run/java/latest', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        files: [{ name: 'Main.java', content: code }],
        stdin: stdin || ''
      })
    });
    const data = await response.json();
    const stdout = (data.stdout || '').trim();
    const stderr = (data.stderr || data.error || '').trim();
    res.status(200).json({ stdout, stderr, compileErr: '' });
  } catch (e) {
    res.status(500).json({ error: 'Error al ejecutar el código' });
  }
}
