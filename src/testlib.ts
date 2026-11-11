// Minimal testlib för Lexicon Modul 5. Inga beroenden. Ändra inte den här filen.
// Använd: test("namn", () => { assertEqual(funktion(1), 2); });
// Sidan tests.html visar resultatet. Importera den från din tests-fil.

type Resultat = { namn: string; ok: boolean; fel?: string };

const _resultat: Resultat[] = [];
const _vanta: Promise<unknown>[] = [];

function _lika(a: unknown, b: unknown): boolean {
  if (Object.is(a, b)) return true;
  if (typeof a !== "object" || typeof b !== "object" || a === null || b === null) return false;
  if (Array.isArray(a) !== Array.isArray(b)) return false;
  const ka = Object.keys(a);
  const kb = Object.keys(b);
  if (ka.length !== kb.length) return false;
  return ka.every((k) => _lika((a as Record<string, unknown>)[k], (b as Record<string, unknown>)[k]));
}

function _visa(v: unknown): string {
  if (typeof v === "string") return JSON.stringify(v);
  if (typeof v === "function") return "function";
  try {
    const s = JSON.stringify(v);
    return s === undefined ? String(v) : s;
  } catch {
    return String(v);
  }
}

function _meddelande(e: unknown): string {
  return e instanceof Error ? e.message : String(e);
}

export function assertEqual(faktiskt: unknown, forvantat: unknown, text?: string): void {
  if (!_lika(faktiskt, forvantat)) {
    throw new Error((text ? text + ": " : "") + "förväntade " + _visa(forvantat) + " men fick " + _visa(faktiskt));
  }
}

export function assertTrue(varde: unknown, text?: string): void {
  if (varde !== true) throw new Error((text ? text + ": " : "") + "förväntade true men fick " + _visa(varde));
}

export function assertThrows(fn: () => unknown, text?: string): void {
  try {
    fn();
  } catch {
    return;
  }
  throw new Error((text ? text + ": " : "") + "förväntade att ett fel skulle kastas");
}

export function test(namn: string, fn: () => void): void {
  try {
    fn();
    _resultat.push({ namn, ok: true });
  } catch (e) {
    _resultat.push({ namn, ok: false, fel: _meddelande(e) });
  }
}

export function testAsync(namn: string, fn: () => Promise<unknown> | unknown): void {
  const p = Promise.resolve()
    .then(fn)
    .then(
      () => _resultat.push({ namn, ok: true }),
      (e: unknown) => _resultat.push({ namn, ok: false, fel: _meddelande(e) }),
    );
  _vanta.push(p);
}

export async function visaResultat(): Promise<{ grona: number; totalt: number; resultat: Resultat[] }> {
  await Promise.all(_vanta);
  const grona = _resultat.filter((r) => r.ok).length;
  const sammanfattning = grona + " av " + _resultat.length + " tester gröna";
  if (typeof document !== "undefined") {
    let ruta = document.getElementById("resultat");
    if (!ruta) {
      ruta = document.createElement("main");
      ruta.id = "resultat";
      document.body.appendChild(ruta);
    }
    ruta.textContent = "";
    const h = document.createElement("h1");
    h.textContent = sammanfattning;
    h.style.color = grona === _resultat.length ? "#1a7f37" : "#b42318";
    ruta.appendChild(h);
    const lista = document.createElement("ul");
    lista.style.fontFamily = "system-ui, sans-serif";
    lista.style.lineHeight = "1.7";
    _resultat.forEach((r) => {
      const li = document.createElement("li");
      li.textContent = (r.ok ? "✓ " : "✗ ") + r.namn + (r.ok ? "" : " – " + r.fel);
      li.style.color = r.ok ? "#1a7f37" : "#b42318";
      li.style.listStyle = "none";
      lista.appendChild(li);
    });
    ruta.appendChild(lista);
  }
  console.log(sammanfattning);
  _resultat.filter((r) => !r.ok).forEach((r) => console.log("✗ " + r.namn + " – " + r.fel));
  return { grona, totalt: _resultat.length, resultat: _resultat };
}

if (typeof window !== "undefined") {
  window.addEventListener("load", () => {
    void visaResultat();
  });
}
