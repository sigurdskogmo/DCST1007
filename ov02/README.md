# Øving: Fortsettelse av objektorientert programmering med JavaScript
Disse oppgavene bør ses under ett og gjerne løses under ett. Det lønner seg å lese gjennom
alle oppgavene før du starter. 

## Oppgave 1 - Klasse for konto
Lag en klasse for kontoinformasjon. Det skal være objektvariabler for kundenummer,
kundens navn, og en saldo. For de objekter som baserer seg på klassen, skal saldoen til
enhver tid inneholde det som er saldo akkurat nå. 

## Oppgave 2 - Konstruktører
Vi tenker oss at en kunde kan ha penger som settes inn samtidig som at kontoen opprettes
(for eksempel i forbindelse med bytte av bank). Banken er spesielt ivrige på å få kunder som
er mindre enn 3 år. Disse anses å være super-gode sparere (fordi de har snille besteforeldre
som vil barnet vel). Banken lokker nye barnekontoer med en startkapital på 200 kroner!

Lag en subklasse barnekonto som arver fra klassen konto:

1. Konstruktør som registrerer en vanlig konto, tar i mot kundenummer, navn og saldo.
(Det er mulig å lage kontoer som har 0 i startsaldo :-)
2. Konstruktør som registrerer en barnekonto, tar i mot bare kundenummer og navn.
Saldo settes lik 200. 

## Oppgave 3 - Metoder for innskudd og uttak
Lag metoder som setter inn penger på en konto, og som tar ut penger fra en konto. Kall
metodene for ```innskudd()``` og ```uttak()```. Dersom det er 895 kr på for eksempel Karis konto,
og metoden for å ta ut kalles opp, vil det typisk se slik ut:

```kari.uttak(200)```

Etter at uttaket er foretatt, skal det være 695 kroner på kontoen. Vær nøye med at de to
metodene gjør jobben med å oppdatere saldoen riktig! Tenk gjennom: Hva bør skje dersom
Kari prøver å ta ut 1000 kroner i denne situasjonen? 

## Oppgave 4 - Saldoen til Kari er 429 kroner
Lag en metode som heter kontoInformasjon(). Den kan kalles slik:

```kari.kontoInformasjon()```

og skal i så fall skrive ut følgende: \”_Kari Hansen med kundenummer 93827100 har 429
kroner på konto_” dersom det er dette beløpet Kari har akkurat nå. 

## Oppgave 5 - Din egen lille bank! Opprett tre bankkontoer
Dersom du har fått til oppgave 1-4, har du nok til å lage din egen enkle bankløsning! Lise
Jensen, Kari Hansen og Petter Olsen har hver sine bankkontoer. Lag en liten webside som
oppretter konto-objekter for disse tre personene. Lise er bare et lite barn. Hun får derfor 200
kroner i utgangspunktet fra banken. Kari og Petter er derimot voksne. Kari har 895 kroner
siden hun i dag har byttet bank, mens Petter har opprettet en ekstra konto og starter på
scratch (0 kroner). Husk at du har to ulike klasser og konstruktører som kan brukes.

I løpet av en dag kan så mangt skje med en bankkonto. Programmet ditt skal simulere en
dag, etter følgende hendelsesforløp:

- Klokka 10:30 – Kari tar ut 300 kroner.
- Klokka 11:00 – Bestefaren til Lise er i det gavmilde hjørnet, og setter inn 4000 kroner.
- Klokka 11:00 – Petter setter inn 3000 kroner.
- Klokka 12:15 – Kari overfører 250 kroner i bursdagsgave til Petter.
- Klokka 17:30 – Kari forsøker å ta ut 800 kroner for å kjøpe kjole til julebordet. Har hun råd
til det, mon tro?

Kod gjerne alt dette i samme knapp hvis du vil det. Du kan ikke vite hvor mye hver person
har på kontoen til enhver tid. Det er derfor lurt å teste på om uttak går bra. Tidspunkt og
saldo skal helst skrives ut. Tidspunkt registreres **ikke** i objektet. Det er kun navn,
kundenummer og saldo som skal registreres i objektet.

Et apropos: Du kan selvsagt regne ut resultatet for akkurat dette hendelsesforløpet, men det
er ikke sikkert du kunne gjort det hvis brukeren selv kunne skrevet i en tekstboks hvor mye
som skal inn/ut av konto... Tekstboks er forresten del av neste oppgave, mens du i denne
oppgaven kan hardkode alle verdier. 

## XTRA (frivillig): Oppgave 6 - Startverdier fra brukergrensesnittet
I oppgave 5 skulle du hardkode startverdiene. Det er lite gunstig i en ordentlig bank-løsning.
Utvid programmet slik at brukeren kan få skrive inn startverdien til Kari, Lise og Petter i 3
tekstbokser, og angir hvorvidt hver person er et barn eller ikke. 