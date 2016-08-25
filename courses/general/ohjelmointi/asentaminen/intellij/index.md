---
title: Ympäristön asentaminen &ndash; IntelliJ IDEA
layout: course
main-class: has-aside
sidenav: general/ohjeita
---

Jotta saisit IntelliJ IDEA:n Ultimate-version käyttöösi ilmaiseksi, sinun tarvitsee tehdä opiskelija-tili Jetbrainsille (yritykselle, joka kehittää ohjelmointiympäristöä).

Mene osoitteeseen <https://www.jetbrains.com/shop/eform/students> ja täytä lomake tiedoillasi. Saat opiskelijalisenssin käyttöösi, kun käytät joko @helsinki.fi- 
tai @cs.helsinki.fi-päätteistä sähköpostiosoitetta. Lomakkeen täytettyäsi saat ohjeet antamaasi sähköpostiosoitteeseen jatkotoimista opiskelijalisenssin saamisesta.

Kun olet saanut opiskelijalisenssin käyttöösi, ladataan ja asennetaan IntelliJ IDEA -ohjelmistoympäristö. Ympäristön asentamisen alkutoimet tapahtuvat hieman eri tavalla eri käyttöjärjestelmillä. Valitse alta oma käyttöjärjestelmäsi:

<div class="actions">
	<a class="action" href="#windows">Windows</a>
	<a class="action" href="#mac-os-x">Max OS X</a>
	<a class="action" href="#linux">Linux</a>
</div>

# Windows

1. Mene osoitteeseen <https://www.jetbrains.com/idea/download/#section=windows> ja paina Download-nappia Ultimate-tekstin alla.

2. Lataa exe-tiedosto haluamaasi paikkaan. Tiedoston latauduttua asenna IntelliJ IDEA tuplaklikkaamalla ladattua tiedostoa.

3. Intallation Setup Wizard aukeaa. Paina Next.

4. Valitse paikka, mihin haluat ohjelmointiympäristön asennettavan. Paina Next.

5. Valitse 64-bit launcher, mikäli sellainen vaihtoehto on näkyvillä. Jos ei, valitse 32-bit launcher. "Create assosiations" -kohdan voit jättää huomiotta. Paina Next.

6. Valitse Start menu folder (oletuksena annettu Jetbrains on hyvä, ellet halua jotakin muuta). Valitse Install lopuksi.

7. Kestää hetki kun IntelliJ asentuu. Sen asennuttua ruksita laatikko IntelliJ:n käynnistämisestä lopetettuasi, ja lopeta asennus painamalla "Finish"-nappia.

Tässä vaiheessa voit siirtyä [seuraavaan vaiheeseen](#seuraavaksi).


# Linux

1. Mene osoitteeseen <https://www.jetbrains.com/idea/download/#section=linux> ja paina Download-nappia Ultimate-tekstin alla.

2. Talleta pakattu tar.gz-tiedosto haluaamasi paikkaan ja mene paikkaan johon sen latasit. Tiedoston ladauduttua pura (extract) tiedosto haluaamasi paikkaan.

3. Avaa komentorivi, siirry puretun kansion sisälle (cd-komennolla, esim. cd idea-IU-162.1628.40, mikäli purit tiedoston Home-hakemistosi juureen), ja siellä bin-kansioon ja kirjoita ./idea.sh

Tässä vaiheessa voit siirtyä [seuraavaan vaiheeseen](#seuraavaksi).

# Mac OS X

Tässä vaiheessa voit siirtyä [seuraavaan vaiheeseen](#seuraavaksi).

# Seuraavaksi

1. Ensimmäisen kerran IntelliJ:tä avattaessa, IntelliJ kysyy onko sinulla valmiita asetuksia jotka haluaisit importata ohjelmistoympäristöön. Valitse vaihtoehto "I do not have a previous version of IntelliJ IDEA or I do not want to import my settings" ja paina OK.

2. Tämän jälkeen sinulta kysytään lisenssiä. Avautuneessa ikkunassa oletuksena on "Activate license with Jetbrains Account", tämä on hyvä. Täytä lomake aiemmin tehdyn Jetbrains-tilin tiedoilla ja paina "Activate".

3. Tämän jälkeen IntelliJ kysyy sekalaisia kysymyksiä asetuksiin liittyen. Älä skippaa näitä. 
- Ensimmäisen kohdalla voit valita teeman (IntelliJ on hyvä, mutta tumman teeman halutessasi valitse Darcula (tätä voi muuttaa myöhemmin). Paina "Next: Desktop Entry". 
- Seuraavalla ruudulla anna oletuksen olla (ellei koneellasi ole useampi ihminen joka käyttäisi ohjelmistoympäristöä) ja paina "Next: Launcher Script". 
- Tälläkin ruudulla paina vaan "Next: Default plugins". 
- Anna näidenkin olla, ja paina vaan "Next: Featured plugins"
- Tällä ruudulla asenna Scala, Live Edit Tool, Node.JS ja Angular. Jätä IdeaVim-liitännäinen asentamatta. Liitännäisten asennuttua paina "Start using IntelliJ IDEA".

Asetusten jälkeen IntelliJ avaa Welcome-screenin. IntelliJ IDEA on nyt onnistuneesti asennettu, ja seuraavaksi asennamme TestMyCode-liitännäisen.

<div class="actions">
	<a class="action" href="/courses/general/ohjelmointi/asentaminen/intellij/tmc/">TestMyCode -liitännäisen asentaminen</a>
</div>

