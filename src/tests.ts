import { test, assertEqual } from "./testlib";
import {
  formateraPris, momsDel, medRabatt, ärÖppet, summa, snitt, största, upprepa, kvittorad, dubbla, ärJämnt,
} from "./funktioner";

// Tester för funktioner.ts. Ändra inte den här filen.
// Läs gärna testerna: de visar exakt vad varje funktion ska göra.

test("formateraPris: heltal", () => {
  assertEqual(formateraPris(35), "35 kr");
  assertEqual(formateraPris(0), "0 kr");
});
test("formateraPris: decimaltal får två decimaler och komma", () => {
  assertEqual(formateraPris(91.8), "91,80 kr");
  assertEqual(formateraPris(10.5), "10,50 kr");
});

test("momsDel: 12 % moms ingår i priset", () => {
  assertEqual(momsDel(112), 12);
  assertEqual(momsDel(102), 10.93);
  assertEqual(momsDel(0), 0);
});

test("medRabatt: räknar bort procent", () => {
  assertEqual(medRabatt(100, 10), 90);
  assertEqual(medRabatt(200, 25), 150);
  assertEqual(medRabatt(100, 0), 100);
});

test("ärÖppet: vardag", () => {
  assertEqual(ärÖppet("måndag", 7), true);
  assertEqual(ärÖppet("måndag", 6), false);
  assertEqual(ärÖppet("fredag", 17), true);
  assertEqual(ärÖppet("fredag", 18), false);
});
test("ärÖppet: helg", () => {
  assertEqual(ärÖppet("lördag", 8), false);
  assertEqual(ärÖppet("lördag", 9), true);
  assertEqual(ärÖppet("söndag", 15), true);
  assertEqual(ärÖppet("söndag", 16), false);
});

test("summa: adderar talen", () => {
  assertEqual(summa([1, 2, 3]), 6);
  assertEqual(summa([35, 32, 59]), 126);
});
test("summa: tom lista ger 0", () => {
  assertEqual(summa([]), 0);
});

test("snitt: medelvärde", () => {
  assertEqual(snitt([2, 4, 6]), 4);
  assertEqual(snitt([10]), 10);
});
test("snitt: tom lista ger 0 (och inte NaN)", () => {
  assertEqual(snitt([]), 0);
});

test("största: hittar max", () => {
  assertEqual(största([3, 9, 4]), 9);
  assertEqual(största([-5, -2, -9]), -2);
});
test("största: tom lista ger undefined", () => {
  assertEqual(största([]), undefined);
});

test("upprepa: upprepar texten", () => {
  assertEqual(upprepa("ab", 3), "ababab");
  assertEqual(upprepa("x", 1), "x");
  assertEqual(upprepa("x", 0), "");
});

test("kvittorad: bygger en rad", () => {
  assertEqual(kvittorad("Kaffe", 2, 32), "2 x Kaffe: 64 kr");
  assertEqual(kvittorad("Bulle", 1, 35), "1 x Bulle: 35 kr");
});

test("dubbla: pilfunktion", () => {
  assertEqual(dubbla(4), 8);
  assertEqual(dubbla(-1), -2);
});
test("ärJämnt: pilfunktion", () => {
  assertEqual(ärJämnt(4), true);
  assertEqual(ärJämnt(7), false);
});
