// Minimal testlib för Lexicon Modul 5. Inga beroenden.
// Använd: test('namn', () => { assertEqual(funktion(1), 2); });
// Klassiskt skript: ladda med <script src="test.js"></script> före tests.js.
const _resultat = [];
const _vanta = [];

function _lika(a, b) {
  if (Object.is(a, b)) return true;
  if (typeof a !== 'object' || typeof b !== 'object' || a === null || b === null) return false;
  if (Array.isArray(a) !== Array.isArray(b)) return false;
  const ka = Object.keys(a), kb = Object.keys(b);
  if (ka.length !== kb.length) return false;
  return ka.every(k => _lika(a[k], b[k]));
}
function _visa(v) {
  if (typeof v === 'string') return JSON.stringify(v);
  if (typeof v === 'function') return 'function';
  try { const s = JSON.stringify(v); return s === undefined ? String(v) : s; } catch (e) { return String(v); }
}
function assertEqual(faktiskt, forvantat, text) {
  if (!_lika(faktiskt, forvantat)) {
    throw new Error((text ? text + ': ' : '') + 'förväntade ' + _visa(forvantat) + ' men fick ' + _visa(faktiskt));
  }
}
function assertTrue(varde, text) {
  if (varde !== true) throw new Error((text ? text + ': ' : '') + 'förväntade true men fick ' + _visa(varde));
}
function assertThrows(fn, text) {
  try { fn(); } catch (e) { return; }
  throw new Error((text ? text + ': ' : '') + 'förväntade att ett fel skulle kastas');
}
function test(namn, fn) {
  try { fn(); _resultat.push({ namn, ok: true }); }
  catch (e) { _resultat.push({ namn, ok: false, fel: e.message }); }
}
function testAsync(namn, fn) {
  const p = Promise.resolve().then(fn).then(
    () => _resultat.push({ namn, ok: true }),
    e => _resultat.push({ namn, ok: false, fel: e && e.message ? e.message : String(e) })
  );
  _vanta.push(p);
}
async function visaResultat() {
  await Promise.all(_vanta);
  const grona = _resultat.filter(r => r.ok).length;
  const sammanfattning = grona + ' av ' + _resultat.length + ' tester gröna';
  if (typeof document !== 'undefined') {
    let ruta = document.getElementById('resultat');
    if (!ruta) { ruta = document.createElement('main'); ruta.id = 'resultat'; document.body.appendChild(ruta); }
    ruta.textContent = '';
    const h = document.createElement('h1');
    h.textContent = sammanfattning;
    h.style.color = grona === _resultat.length ? '#1a7f37' : '#b42318';
    ruta.appendChild(h);
    const lista = document.createElement('ul');
    lista.style.fontFamily = 'system-ui, sans-serif';
    lista.style.lineHeight = '1.7';
    _resultat.forEach(r => {
      const li = document.createElement('li');
      li.textContent = (r.ok ? '✓ ' : '✗ ') + r.namn + (r.ok ? '' : ' – ' + r.fel);
      li.style.color = r.ok ? '#1a7f37' : '#b42318';
      li.style.listStyle = 'none';
      lista.appendChild(li);
    });
    ruta.appendChild(lista);
  }
  console.log(sammanfattning);
  _resultat.filter(r => !r.ok).forEach(r => console.log('✗ ' + r.namn + ' – ' + r.fel));
  return { grona, totalt: _resultat.length, resultat: _resultat };
}
if (typeof window !== 'undefined') window.addEventListener('load', () => { visaResultat(); });
