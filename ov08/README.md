# Øving: Brukerinput, komponent-referanser og tjenesteklasser
Ta utgangspunkt i eksempelkoden for leksjonen: https://gitlab.com/ntnu-idri1005/react-input.

Det forutsettes at du endrer og/eller legger til nødvendige databasetabeller med eventuell testdata. Testdata legges inn i databasetabellene ved hjelp av ```INSERT```-setninger som vist i leksjonen.

Som ved forrige øving:

* Legg til visninger for studieprogram. Studieprogrammene kan vises på lignende måte som studentene blir vist.
    * En student er tilknyttet maks ett studieprogram, men et studieprogram kan ha mange tilknyttede studenter

Databasekallene knyttet til studieprogram bør være samlet i en egen tjenesteklasse, for eksempel ```StudyProgramService```.

I tillegg, implementer funksjonalitet for å:

* endre opplysningene til en student
* endre opplysningene til et studieprogram
* knytte en student mot et studieprogram
* slette en student
* slette et studieprogram

Frivillig:

* legge til en ny student
* legge til et nytt studieprogram
* returner ```Promise-objekter``` i funksjonene i ```src/services.js```-filen, og bruk disse objektene i src/index.js-filen.

Merk at det går fint å utføre denne øvingen uten ```JOIN``` i SQL-setningene.