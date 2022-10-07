# GeoAPP (Name pending)
[Github repo](https://github.com/OdiousCode/GeoAPP)

## Projektmedlemmar

[Görgen Andersson](https://github.com/OdiousCode/)

[Erik Jakobsson](https://github.com/Serover)

[Jimmie Kleman](https://github.com/CmdrMaylee)

[Hampus Andersson](https://github.com/HampusAndersson01)

# Hur du kör projektet

Först för att få hem alla nödvändiga packages, se till att du står i projektets rootkatalog, skriv 'npm install' ( kräver nodejs installerat ).

Bör ta en liten stund, låt den tugga och hämta hem det som behövs! När detta är klart, kan du sedan skriva 'npm start' så kör den igång projektet.

Efter det har du ett par olika alternativ att få igång själva appen, antingen via emulator eller simulator på datorn. Har du en av dessa, så kan du trycka I i konsollen, för att öppna iOS varianten. A för att öppna android varianten. 
Eller utifall du vill testa med en fysisk telefon, tryck C för att få fram en QR-kod som du skannar med appen 'expo-go' som finns i appstore/playstore.
(Värt att notera, då ingen i projektet har en appleprodukt, har vi ej testat denna på iOS!)

Sedan frågar appen efter rättigheter till din location, välj er preferens där, men för att programmet skall fungera bör den tillåtas med något av alternativen. ( Fungerar bäst med fine-location ).

Då vi ej har gjort mer än ett quiz ännu, så för att komma igång skriv "1" i kod för quiz och logga in, nu är det bara att köra, visa att du är bäst!

Om du inte är så sugen på att ta dig ut och gå för att nå punkterna, så kan du köra en förbestämd rutt i din simulator/emulator. Finns en google-maps rutt-fil under katalogen 'utils' som heter GeoAPPTestRoute.gpx.
Denna kan du ladda i t.ex android-studio's emulator, välj din emulerade telefon och starta. Sedan i telefonen ta dig till Location settings genom att klicka på "..." sedan location och klicka på "routes" upp i mitten. Välj import GPX/XML och leta fram GeoAPPTestRoute.gpx i projektet under utils.
Kör den på repeat playback för att vara säker på att frågorna triggas, den rör sig väldigt snabbt nämligen!

# Våra avgränsningar

Då ingen i vår grupp har en Apple-produkt, har vi valt att hålla oss till android uteslutande, ingen möjlighet att testa på iOS dessvärre. Så om ni testar appen i iOS kan det ha oväntade resultat.

Vi har valt att hålla oss till en färdig förkodad quiz, medans tanken var att man ska kunna skapa egna quizes som t.ex en Administratör.

Planen var att ha en stegräknare med hjälp av expo's Pedometer komponent, fungerar utmärkt på både iOS och äldre Android. Dock upptäckte vi att för nyare modeller av android(och vissa andra telefonmodeller), så duger inte denna komponenten. Utan man måste använda sig utav Google Fit API, då man behöver att ansluta appen mot google fit, skapa en nyckel och många andra steg som kändes väldigt overkill för vår lilla app. Så vi valde att nöja oss där, då det funkar på vissa modeller. Men om vi någonsin planerar på att jobba vidare med appen, så är det definitivt aktuellt.

# Komponenter vi har nyttjat

## React-native komponenter

- React-Navigation - Används för att navigera emellan olika sidor i appen.

- View - Används flitigt, för att skapa sektioner på varje sida i appen, likt div i html.

- Text - Används i samklang med styled components, för att skapa fördefinierade textfält med möjlighet att ta nya props. I vårt fall small-, medium- och bigtext.

- Image - Används för att ladda in bilder på b.la välkomstsidan (login)

- Pressable - Används bl.a för att göra varje fråga i listan av frågor till en länk till den specifika frågan.

- TouchableOpacity - Våra fördefinierade "regularButton" med möjlighet att ta nya props, är en knapp skapad i kombination av TouchableOpacity och styled components.

## Expo komponenter

- MapView - Används för att rita vår vackra karta med markers för frågor.

- Pedometer - Räknar stegen användaren tar åt oss.

- Location - Används för att se vart användaren befinner sig, för att se om dom är nära en fråga och därmed "hittar" den specfika frågan.

- Notification - Används för att notifiera användaren att dom nått positionen av en fråga.

- SafeaAreaView - Fungerar som en vanlig men ser även till att vår appliktion inte hamnar bakom telefonen "fasta" interface, i form av bakåt-knappar, batterimätare osv.

- StatusBar - Ändrar färgen på telefonens statusfält (batteri, nätstyrka osv) och knappfältet på android, i vårt fall så att den är ljus. Eftersom vår app är väldigt mörk.

- MaterialIcons - Så vi får ikoner för vår bottomtab navigator.

## Extern komponent

- styled components - Använder vi tillsammans med RN komponenterna Text och TouchableOpacity, för att skapa våra egna fördefinierade knappar och texter i olika textstorlek med färger osv.

## Krav för godkänt:

- [x] Projektet använder minst 6 stycken RN-komponenter och minst 6 stycken Expo
      komponenter.
- [x] De utvalda komponenterna ska antecknas i er README tillsammans med en lista över
      genomförda krav.
- [x] Git & GitHub har använts
- [x] Projektmappen innehåller en README.md fil - (läs ovan för mer info)
- [x] Uppgiften lämnas in i tid!
- [x] Muntlig presentation är genomförd

## Krav för väl godkänt:

- [x] Alla punkter för godkänt är uppfyllda
- [x] React Navigation används för att skapa en bättre upplevelse i appen.
- [x] Ytterligare en valfri extern modul används i projektet.
- [x] Prototyper för applikation tas fram innan den implementeras. Bilder på prototypen
      skall finnas i projektet vid inlämning.
      (Screenshot finns i roten av projektet, tipspromenader-figma.png)

## Uppgiftsbeskrivning

## GeoAPP

I den här laborationen ska ni i grupp om tre skapa en nativ app med med hjälp av React
Native (RN), Expo och Typescript. Vad ni väljer att skapa är valfritt däremot ska ni
använda er av minst 6 stycken RN komponenter och minst 6 stycken från Expo SDK’n.
Läs noga igenom hela uppgiftsbeskrivningen innan ni börjar.

## Inlämning

För att bli godkänd på den här uppgiften MÅSTE ni använda GIT och GitHub.
Inlämningen sker som vanligt via läroplattformen. I din projektmapp ska det finnas
(utöver all kod) en README.md fil. Den ska innehålla en titel, beskrivning av projektet,
info om hur projektet byggs och körs samt vilka krav som är uppfyllda. Samt en .git mapp
så jag kan hitta till erat publika repo.

## Presentation

Ni ska i samband med inlämning hålla i en presentation där ni för klassen presenterar er
applikation, vilka komponenter ni har använt och kort beskriva vad dom används till -
här kan det var intressant att visa lite kod kring några utvalda komponenter. Ni ska även
presentera hur ni har planerat, genomfört och strukturerat ert arbete. Dessutom ska
presentationen innefatta en reflekterande del. Varje grupp har ca 20 min på sig.
