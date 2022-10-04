# GeoAPP (Name pending)

## Projektmedlemmar 

Görgen Andersson

Erik Jakobsson

Jimmie Kleman
 
Hampus Andersson 

# Våra avgränsningar #

# Komponenter vi har nyttjat #

## React-native komponenter ##

- React-Navigation - Används för att navigera emellan olika sidor i appen.

- View - Används flitigt, för att skapa sektioner på varje sida i appen, likt div i html.

- Text - Används i samklang med styled components, för att skapa fördefinierade textfält med möjlighet att ta nya props. I vårt fall small-, medium- och bigtext.

- Image - Används för att ladda in bilder på b.la välkomstsidan (login)

- Pressable - Används bl.a för att göra varje fråga i listan av frågor till en länk till den specifika frågan.

- TouchableOpacity - Våra fördefinierade "regularButton" med möjlighet att ta nya props, är en knapp skapad i kombination av TouchableOpacity och styled components.

## Expo komponenter ##

- MapView - Används för att rita vår vackra karta med markers för frågor.

- Pedometer - Räknar stegen användaren tar åt oss.

- Location - Används för att se vart användaren befinner sig, för att se om dom är nära en fråga och därmed "hittar" den specfika frågan.

- Notification - Används för att notifiera användaren att dom nått positionen av en fråga.

- StatusBar - Ser till att vår appliktion inte hamnar bakom telefonen "fasta" interface, i form av bakåt-knappar, batterimätare osv.

## Extern komponent ##

- styled components - Använder vi tillsammans med RN komponenterna Text och TouchableOpacity, för att skapa våra egna fördefinierade knappar och texter i olika textstorlek med färger osv.

## Krav för godkänt: ##

- [X] Projektet använder minst 6 stycken RN-komponenter och minst 6 stycken Expo
komponenter.
- [X] De utvalda komponenterna ska antecknas i er README tillsammans med en lista över
genomförda krav.
- [X] Git & GitHub har använts
- [X] Projektmappen innehåller en README.md fil - (läs ovan för mer info)
- [ ] Uppgiften lämnas in i tid!
- [ ] Muntlig presentation är genomförd

## Krav för väl godkänt: ##

- [ ] Alla punkter för godkänt är uppfyllda
- [X] React Navigation används för att skapa en bättre upplevelse i appen.
- [X] Ytterligare en valfri extern modul används i projektet.
- [X] Prototyper för applikation tas fram innan den implementeras. Bilder på prototypen
skall finnas i projektet vid inlämning.


## Uppgiftsbeskrivning ##

## GeoAPP ##
I den här laborationen ska ni i grupp om tre skapa en nativ app med med hjälp av React
Native (RN), Expo och Typescript. Vad ni väljer att skapa är valfritt däremot ska ni
använda er av minst 6 stycken RN komponenter och minst 6 stycken från Expo SDK’n.
Läs noga igenom hela uppgiftsbeskrivningen innan ni börjar.

## Inlämning ##
För att bli godkänd på den här uppgiften MÅSTE ni använda GIT och GitHub.
Inlämningen sker som vanligt via läroplattformen. I din projektmapp ska det finnas
(utöver all kod) en README.md fil. Den ska innehålla en titel, beskrivning av projektet,
info om hur projektet byggs och körs samt vilka krav som är uppfyllda. Samt en .git mapp
så jag kan hitta till erat publika repo.

## Presentation ##
Ni ska i samband med inlämning hålla i en presentation där ni för klassen presenterar er
applikation, vilka komponenter ni har använt och kort beskriva vad dom används till -
här kan det var intressant att visa lite kod kring några utvalda komponenter. Ni ska även
presentera hur ni har planerat, genomfört och strukturerat ert arbete. Dessutom ska
presentationen innefatta en reflekterande del. Varje grupp har ca 20 min på sig.
