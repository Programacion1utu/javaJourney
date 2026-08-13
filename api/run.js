module.exports = async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { code, stdin } = req.body;
  if (!code) return res.status(400).json({ error: 'Sin código' });

  try {
    const response = await fetch('https://wandbox.org/api/compile.json', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        compiler: 'openjdk-jdk-22+36',
        code,
        stdin: stdin || '',
        'compiler-option-raw': '-encoding UTF-8'
      })
    });

    if (!response.ok) throw new Error('Wandbox error ' + response.status);

    const data = await response.json();
    const stdout = (data.program_output || '').trim();
    const compileErr = (data.compiler_error || '').trim();
    const stderr = (data.program_error || '').trim();

    res.status(200).json({ stdout, stderr, compileErr });
  } catch (e) {
    console.error('run error:', e);
    res.status(500).json({ error: e.message });
  }
};
