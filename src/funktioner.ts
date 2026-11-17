// Dag 2, del 2: Funktioner. Gör ALLA tester gröna på tests.html.
// Regler: skriv funktionerna själv, i den här filen. Ändra inte tests.ts.
// Röda understrykningar tills du skrivit return är normalt: TypeScript vet att funktionen ska ge ett värde.

// 1. Ska returnera priset som text med " kr".
//    Heltal utan decimaler: formateraPris(35) ger "35 kr".
//    Decimaltal med två decimaler och komma: formateraPris(91.8) ger "91,80 kr".
export function formateraPris(pris: number): string {
  if (pris === Math.floor(pris) ) {
    return `${pris} kr`
  }
  else {
    return `${pris.toFixed(2).toString().replace(".", ",")} kr`
  }
}

// 2. Momsdelen av ett pris med 12 % moms (fiktiv sats), avrundad till två decimaler.
//    momsDel(112) ger 12.
export function momsDel(pris: number): number {
  pris = pris / 112 * 12;
  if (pris === Math.floor(pris) ) {
    return pris
  }
  else {
    return Math.round(pris * 100) / 100;
  }
}

// 3. Priset efter rabatt i procent. medRabatt(100, 10) ger 90.
export function medRabatt(pris: number, procent: number): number {
  return pris - (pris * procent / 100)
}

// 4. Är kaféet öppet? Vardagar 7–18, helger (lördag, söndag) 9–16.
//    Öppnar vid starttimmen, stänger vid sluttimmen (18 är stängt).
export function ärÖppet(veckodag: string, klockslag: number): boolean {
  if (veckodag === "lördag" || veckodag === "söndag" ) {
    if (klockslag < 9 || klockslag >= 16 ) {
      return false
    }
    else {
      return true
    }
  }
  else if (klockslag < 7 || klockslag >= 18) {
    return false
  }
  else {
    return true
  }
}

// 5. Summan av alla tal i listan, med en loop. summa([1, 2, 3]) ger 6.
export function summa(tal: number[]): number {
  let total: number = 0;
  for (let i = 0; i < tal.length; i++) {
    total = total + tal[i]
  }
  return total
}

// 6. Medelvärdet. snitt([2, 4, 6]) ger 4. Tom lista ger 0.
export function snitt(tal: number[]): number {
  if (tal.length > 0) {
    return tal[Math.floor(tal.length / 2)]
  }
  else {
    return 0
  }
}

// 7. Det största talet, med en loop. största([3, 9, 4]) ger 9. Tom lista ger undefined.
export function största(tal: number[]): number | undefined {
  let storsta: number = tal[0];
  for (let i = 0; i < tal.length; i++) {
    if (storsta < tal[i]) {
      storsta = tal[i]
    }
  }
  return storsta
}

// 8. Upprepa en text. upprepa("ab", 3) ger "ababab". Använd en loop.
export function upprepa(text: string, antal: number): string {
  let resultat: string = "";
  for (let i = 0; i < antal; i++) {
    resultat = resultat.concat(text)
  }
  return resultat
}

// 9. En kvittorad. kvittorad("Kaffe", 2, 32) ger "2 x Kaffe: 64 kr".
//    Använd formateraPris från uppgift 1.
export function kvittorad(namn: string, antal: number, pris: number): string {
  return `${antal} x ${namn}: ${pris * antal} kr`
}
// 10. Pilfunktioner. Skriv dem själv med const och =>.
//     dubbla(4) ger 8. ärJämnt(4) ger true.
export const dubbla = (n: number): number => {
  // TODO
};
export const ärJämnt = (n: number): boolean => {
  // TODO
};
