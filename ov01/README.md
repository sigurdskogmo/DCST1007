# Øving: Introduksjon til objektorientert programmering med JavaScript

## Oppgave 1 - Lag en klasse: Bil
Lag en klasse som heter Bil. La denne klassen ha objektvariablene "registreringsnr”,
”merke”, ”årsmodell” og ”hastighet”. 

## Oppgave 2 - Registrer bilobjekter
Lag tre bilobjekter og sørg for at objektvariablene får innhold. Kall variablene det du vil, for
eksempel volvo, ferrari og lada. 

## Oppgave 3 - Metoder i klassen Bil
Vi tenker oss at egenskapen ”hastighet” skal antyde hvor stor fart bilen har akkurat nå, målt i
antall kilometer i timen. Lag en metode som heter gass() for klassen Bil. Denne metoden skal
øke farten til bilen med tallet 10. Vi tenker oss her at 10 står for antall kilometer i timen. Lag
også en metode som heter brems() som skal redusere farten til bilen med 10. 

## Oppgave 4 - Kjør bilen fremover
Lag et program der bilene skal kunne kjøre fremover ved at brukeren skal kunne trykke på
seks ulike knapper. Ved trykk på den ene knappen, skal den første bilen (volvo) øke farten
med 10. Tilsvarende skal det være en annen knapp for å redusere farten. Trykker brukeren 3
ganger på gass-knappen, så skal altså bilen ha 30 km/t som fart. Lag tilsvarende knapper for
alle bilene.

Hint: Bruk metoden gass().

Spørsmål som er verdt å stille seg: Er det nok å bruke lokale variabler når du oppretter
bilobjektene i dette tilfellet? 

## Oppgave 5 - Hvor fort kjører bilene?
Lag en ny metode som finner ut hvor fort en bil kjører. Bruk denne metoden til å hele tiden
vise statusinformasjon om hvor fort de tre bilene kjører på en brukervennlig måte overfor
brukeren. 