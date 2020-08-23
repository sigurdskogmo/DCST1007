# Øving: Promises
Ta utgangspunkt i utdelt kode presentert i forelesningen.

## Oppgave 1 - Test tall
Skriv en funksjon **testTall()** som tar et tall som argument og bruker en Promise til å teste om
tallet er mindre eller større enn verdien 10.

## Oppgave 2 - Lenking (chaining)
Skriv to funksjoner som bruker Promises og som lenkes sammen.

Den første funksjonen **lagStoreBokstaver()** vil ta inn en array med ord og gjøre om alt til
store bokstaver. Den andre funksjonen sorterer ordene alfabetisk. Hvis array-en inneholder
noe annet enn tekststrenger skal det komme en feilmelding.

## Oppgave 3 – Hente data fra en nettjeneste - EKSTRA
Følgende lenke henter ut data om en bruker på github i JSON format.

Skriv kode som henter ut lenken til brukerens avatar fra github. Når du har fått innholdet (og
Promise er oppfylt) presenter bildet på en webside.

```https://api.github.com/users/${user.name}```

[https://api.github.com/users/remy](https://api.github.com/users/remy) vil ha "avatar_url": "https://avatars0.githubusercontent.com/u/13700?v=4"