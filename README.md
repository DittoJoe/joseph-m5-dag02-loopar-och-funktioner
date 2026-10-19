# Dag 2 · Loopar och funktioner

*Modul 5, UI/UX & Frontendutveckling (JavaScript), Lexicon IT-Proffs*

## Vad du ska göra idag

Du lär dig låta koden **upprepa** (loopar) och **paketera** kod i återanvändbara bitar (funktioner). Du skriver tio funktioner för **Kafé Kardemumma** och en testsida visar direkt vilka som fungerar. Målet är att alla tester blir gröna.

## Bakgrund

En loop upprepar kod utan att du skriver den flera gånger. En funktion är ett namngivet recept: du ger den indata, den ger dig ett resultat. Funktioner är grunden för all kod du skriver från och med nu. Idag lär du dig också att arbeta med **tester**: små kontroller som talar om för dig om funktionen gör det den ska. Du öppnar `tests.html` med Live Server och ser resultatet i webbläsaren.

## Så arbetar du (samma som alltid)

1. **Forka** dagens repo på GitHub (*Fork → Create fork*).
2. **Klona din fork:** *Code → HTTPS → kopiera adressen*. I terminalen (Ctrl+ö i VS Code): `git clone <adressen>`. Öppna den nya mappen i VS Code och starta *Live Server*.
3. **Gör uppgiften.** Spara och kontrollera i webbläsaren och Console (F12) efter varje steg. Gör en commit efter varje avslutat steg: `git add .` och `git commit -m "Beskriv vad du gjorde"`.
4. **Skicka upp** när du är klar: `git push`.
5. **Fortsätt i `mitt-projekt`** med dagens projektsteg (längre ned).
6. **Lämna in i Microsoft Forms.**

Fastnar du: skriv ner exakt var och vad du försökt (och vilket felmeddelande du fick), och ta det först i nästa handledda pass.

## Uppgiften steg för steg

### Steg 1. Loopar i Console

Öppna `loopar.js` och lös uppgift 1–4 (uppgift 5 är en utmaning). Använd `for`, `while` och `for...of`. Kontrollera i Console efter varje uppgift. Commit: `git commit -m "Dag 2: loopar"`.

### Steg 2. Öppna testsidan och läs ett test

Starta Live Server på `tests.html`. De flesta tester är röda, och det är meningen. Öppna `tests.js` och läs de två första testerna. Vad förväntas av `formateraPris(35)`? Gissa vad `formateraPris` ska göra innan du skriver den.

### Steg 3. Skriv funktionerna 1–3

I `funktioner.js`: skriv `formateraPris`, `momsDel` och `medRabatt`. Ladda om `tests.html` efter varje funktion. Funktionen ska använda `return`, inte `console.log`. Commit när de tre testerna är gröna.

### Steg 4. Skriv funktion 4: ärÖppet

Du löste samma problem igår, nu ska det bli en funktion som tar `veckodag` och `klockslag` som parametrar och returnerar `true` eller `false`. Tänk på att 18 är *stängt* på vardagar och 16 på helger.

### Steg 5. Skriv funktionerna 5–8 med loopar

`summa`, `snitt`, `största` och `upprepa` ska använda loopar. Titta noga på testerna för tom lista: vad ska hända då? `snitt([])` får inte ge `NaN`.

### Steg 6. Skriv funktion 9 som använder en annan funktion

`kvittorad` ska anropa din `formateraPris`. Funktioner som anropar funktioner är hur stora program byggs.

### Steg 7. Pilfunktioner

Skriv `dubbla` och `ärJämnt` som pilfunktioner: `const dubbla = (n) => ...`. Det är bara ett annat sätt att skriva samma sak. Skriv en kommentar som förklarar skillnaden mellan `function dubbla(n) { ... }` och pilfunktionen.

### Steg 8. Scope: förutsäg

Lägg till filen `scope.js` (skapa själv). Skriv koden i `scope.md` (finns i repot) i filen, men *gissa först* vad varje `console.log` skriver ut. Kör sedan och jämför. Skriv en regel med egna ord om vad en funktion kan och inte kan "se".

### Steg 9. Felsök med en brytpunkt

Öppna DevTools → fliken *Sources* → öppna `funktioner.js`. Klicka på radnumret i `summa` för att sätta en brytpunkt och ladda om. Koden stannar. Stega med F10 och titta på värdet av `total` i panelen *Scope*. Det här verktyget är bättre än `console.log` när du fastnar.

## AI-spåret (nivå 1: Förutsäg och förklara)

**Granska din funktion** (cirka 25 minuter, efter att du gjort din egen lösning)

Du förutsäger vad koden gör innan den körs. AI förklarar och granskar, men skriver inte din lösning. AI hittar ofta hörnfall du missar. Men den hittar också problem som inte finns. Du måste kunna avgöra vilket.

Regler: egen lösning först, du ska kunna förklara varje rad, och du loggar i `docs/ai-logg.md` i `mitt-projekt` under rubriken *Modul 5*. Reglerna står i `AI-REGLER-MODUL5.md`.

1. Skriv klart dina funktioner i övningen först, och låt alla tester gå gröna.
2. Klistra in en funktion i AI och be om hörnfall (tomt, negativt, fel typ).
3. Välj två hörnfall. Skriv ett test för vardera som FÖRST misslyckas.
4. Rätta funktionen så att testet går grönt.
5. Logga vilka av AI:s förslag som var relevanta och vilka som var påhittade.

Prompt att utgå från:

```
Här är min JavaScript-funktion:
[klistra in funktionen]
Vilka hörnfall kan den hantera fel?
Lista högst fem, med ett exempelanrop för varje.
Skriv inte om funktionen, bara lista.
```

**Kontrollera med:**

- Kör varje exempelanrop i Console.
- Ser du felet själv? Då är det riktigt.
- Skriv testet innan du ändrar koden.

**I ditt projekt:** Skriv två funktioner för ditt case (till exempel formatera pris, validera inmatning) och ett test för varje.

## Kontrollista: så vet du att du är klar

- [ ] Alla tester på `tests.html` är gröna.
- [ ] `loopar.js` skriver ut rätt i Console för uppgift 1–4.
- [ ] Funktionerna använder `return` och ingen av dem använder `console.log`.
- [ ] `snitt([])` ger `0`, och `största([])` ger `undefined`.
- [ ] Du har skrivit minst en funktion som anropar en annan.
- [ ] Du har testat en brytpunkt i Sources och kan beskriva vad F10 gör.
- [ ] Du har gjort minst fem commits.
- [ ] Du har gjort AI-uppgiften och skrivit en post i `docs/ai-logg.md` i `mitt-projekt`.

## Tips om du fastnar

- Ett test är grönt redan från start, trots att du inte skrivit något. Vilket, och varför? (Svaret handlar om vad en funktion utan `return` ger tillbaka.)
- Det röda testmeddelandet säger vad som förväntades och vad du fick. Läs det: `förväntade "35 kr" men fick undefined` betyder oftast att du glömt `return`.
- Testar du en funktion i Console? Klistra in funktionen och anropa den: `formateraPris(35)`.
- En loop som aldrig slutar? Tryck på *Stop* i webbläsaren, eller stäng fliken. Kontrollera att räknaren ändras i loopen.
- `for (let i = 0; i <= tal.length; i++)` går ett steg för långt. Använd `<`.

## Ditt projekt: Skriv två funktioner med tester för ditt case

Efter övningen jobbar du vidare i `mitt-projekt`, samma repo som i modul 4. Övningen här är träningsbanan, projektet är det som växer. Dagens steg står också i `PROJEKTSTEG-MODUL5.md` (som du kopierar till ditt projekt dag 1), under **Dag 2**.

1. Skapa `js/funktioner.js` och två funktioner som hör till ditt case, till exempel `formateraPris`, `beräknaRabatt` eller `ärGiltigtNamn`.
2. Skapa mappen `tests/`. Kopiera `test.js` och `tests.html` från övningsrepot dit. Ändra sökvägen i `tests.html` så att den pekar på `../js/funktioner.js`.
3. Skapa `tests/tests.js` med minst tre tester per funktion, inklusive ett hörnfall (tomt värde, noll, negativt).
4. Öppna `tests/tests.html` med Live Server. Alla tester ska vara gröna.
5. Commit och push.

**Klart när:** `tests/tests.html` visar minst sex gröna tester.

## Inlämning

**Deadline: imorgon klockan 09.00.** Allt lämnas in i Microsoft Forms. Du behöver inte redovisa något muntligt.

I formuläret fyller du i:

1. Länk till din fork av det här repot.
2. Länk till ditt `mitt-projekt`.
3. Reflektion: Vilken funktion var svårast att få grön, och vad var det som låg bakom? Hur hjälpte testerna dig?

## Vill du mer? (frivilligt)

- Skriv en funktion `kvitto(namn, priser)` som returnerar hela kvittot som en text med radbrytningar.
- Lägg till egna tester i `tests.js` för `upprepa` med negativt antal. Vad *bör* hända?
- Skriv `fizzbuzz(n)` (läs om uppgiften på MDN eller Wikipedia) och testa den.
