// Dag 2, del 2: Funktioner. Gör ALLA tester gröna på tests.html.
// Regler: skriv funktionerna själv, i den här filen. Ändra inte tests.js.

// 1. Ska returnera priset som text med " kr".
//    Heltal utan decimaler: formateraPris(35) ger "35 kr".
//    Decimaltal med två decimaler och komma: formateraPris(91.8) ger "91,80 kr".
function formateraPris(pris) {
  // TODO
}

// 2. Momsdelen av ett pris med 12 % moms (fiktiv sats), avrundad till två decimaler.
//    momsDel(112) ger 12.
function momsDel(pris) {
  // TODO
}

// 3. Priset efter rabatt i procent. medRabatt(100, 10) ger 90.
function medRabatt(pris, procent) {
  // TODO
}

// 4. Är kaféet öppet? Vardagar 7–18, helger (lördag, söndag) 9–16.
//    Öppnar vid starttimmen, stänger vid sluttimmen (18 är stängt).
function ärÖppet(veckodag, klockslag) {
  // TODO
}

// 5. Summan av alla tal i listan, med en loop. summa([1, 2, 3]) ger 6.
function summa(tal) {
  // TODO
}

// 6. Medelvärdet. snitt([2, 4, 6]) ger 4. Tom lista ger 0.
function snitt(tal) {
  // TODO
}

// 7. Det största talet, med en loop. största([3, 9, 4]) ger 9. Tom lista ger undefined.
function största(tal) {
  // TODO
}

// 8. Upprepa en text. upprepa("ab", 3) ger "ababab". Använd en loop.
function upprepa(text, antal) {
  // TODO
}

// 9. En kvittorad. kvittorad("Kaffe", 2, 32) ger "2 x Kaffe: 64 kr".
//    Använd formateraPris från uppgift 1.
function kvittorad(namn, antal, pris) {
  // TODO
}

// 10. Pilfunktioner. Skriv dem själv med const och =>.
//     dubbla(4) ger 8. ärJämnt(4) ger true.
// TODO: const dubbla = ...
// TODO: const ärJämnt = ...
