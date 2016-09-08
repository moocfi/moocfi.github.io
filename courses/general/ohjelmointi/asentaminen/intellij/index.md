---
title: Ympäristön asentaminen &ndash; IntelliJ IDEA
layout: course
main-class: has-aside
sidenav: general/ohjeita
---

Jos sinulla ei ole vielä JDK:ta (Java Development Kit) asennettuna koneellasi, asenna se ensimmäiseksi. Jos on, niin voit hypätä seuraavan linkin ohi.

<div class="actions">
    <a class="action" href="/courses/general/ohjelmointi/asentaminen/intellij/java">Javan asentaminen</a>
</div>

IntelliJ:stä on olemassa kaksi eri versiota: Ultimate ja Community. Community-versio on täysin ilmainen kaikille ja sillä pystyy tekemään ainakin Java MOOC -kurssien tehtävät. Web-juttuja (esim. Web-palvelinohjelmoinnin kurssin tehtäviä) emme kuitenkaan suosittele sillä tehtävän.

Ultimate-versio pystyy myös tähän ja suosittelemme sitä, mikäli olet opiskelija. Saadaksesi opiskelijalisenssin sinun tulee tehdä opiskelijatili Jetbrainsille (yritykselle, joka kehittää kyseistä ohjelmointiympäristöä).

Mikäli et ole opiskelija, siirry asennusohjeisiin valitsemalla käyttöjärjestelmäsi alla olevasta valikosta.

Jos olet opiskelija, tee opiskelijatili Jetbrainsille menemällä osoitteeseen <https://www.jetbrains.com/shop/eform/students> ja seuraa sivuston antamia ohjeita. Opiskelijastatuksesi varmistamiseksi käytä oppilaitoksesi sähköpostiosoitetta, esim. @helsinki.fi tai @cs.helsinki.fi

Kun olet saanut opiskelijalisenssin käyttöösi (tai mikäli käytät Community-versiota), lataa ja asenna IntelliJ IDEA -ohjelmistoympäristö koneellesi.
Ympäristön asentamisen alkutoimet tapahtuvat hieman eri tavalla eri käyttöjärjestelmillä. Valitse alta oma käyttöjärjestelmäsi:

<div class="actions">
    <a class="action" href="#windows">Windows</a>
    <a class="action" href="#mac-os-x">Max OS X</a>
    <a class="action" href="#linux">Linux</a>
</div>

# Windows

1. Mene osoitteeseen <https://www.jetbrains.com/idea/download/#section=windows> ja paina Download-painiketta haluamasi version alta (Community tai Ultimate).

2. Lataa exe-tiedosto haluamaasi paikkaan. Tiedoston latauduttua asenna IntelliJ IDEA ajamalla tiedosto. Asennus tapahtuu kuten normaalin Windows-ohjelman asentaminen. Huomaa kuitenkin seuraava kohta: Valitse 64-bit launcher, mikäli sellainen vaihtoehto on näkyvillä. Jos ei, valitse 32-bit launcher. "Create assosiations" -kohdan voit jättää huomiotta. Paina Next.

Tässä vaiheessa voit siirtyä [seuraavaan vaiheeseen](#seuraavaksi).

# Linux

1. Mene osoitteeseen <https://www.jetbrains.com/idea/download/#section=linux> ja paina Download-nappia haluamasi version alla (Community tai Ultimate).

2. Talleta pakattu tar.gz-tiedosto haluamasi paikkaan ja siirry paikkaan johon sen latasit. Tiedoston latauduttua pura (extract) tiedosto haluaamasi paikkaan.

3. Avaa komentorivi, siirry puretun kansion sisälle (cd-komennolla, esim. cd idea-IU-162.1628.40, mikäli purit tiedoston Home-hakemistosi juureen), ja siellä bin-kansioon ja kirjoita ./idea.sh ja etene asennuswizardin ohjeiden mukaan.

Tässä vaiheessa voit siirtyä [seuraavaan vaiheeseen](#seuraavaksi).

# Mac OS X

1. Mene osoitteeseen <https://www.jetbrains.com/idea/download/#section=mac> ja paina Download-nappia haluamasi version alla (Community tai Ultimate).

2. Talleta .dmg-hakemisto haluamaasi paikkaan.

3. Avaa ladattu .dmg-paketti ja siirrä IDEA-app omaan Applications-hakemistoosi.

Tässä vaiheessa voit siirtyä [seuraavaan vaiheeseen](#seuraavaksi).

# Seuraavaksi

1. Ensimmäisen kerran IntelliJ:tä avattaessa, IntelliJ kysyy onko sinulla valmiita asetuksia jotka haluaisit tuoda ohjelmistoympäristöön. Suosittelemme valitsemaan vaihtoehdon "I do not have a previous version of IntelliJ IDEA or I do not want to import my settings" ja paina OK.

2. **Jos** asensit Ultimate-version, tässä vaiheessa sinulta kysytään lisenssiä. Avautuneessa ikkunassa oletuksena on "Activate license with Jetbrains Account", tämä on hyvä. Täytä lomake aiemmin tehdyn Jetbrains-tilin tiedoilla ja paina "Activate".

3. Tämän jälkeen IntelliJ kysyy sekalaisia kysymyksiä asetuksiin liittyen. Älä skippaa näitä.
- Ensimmäisen kohdalla voit valita teeman (IntelliJ on hyvä). Paina "Next: Desktop Entry".
- Seuraavalla ruudulla anna oletuksen olla (ellei koneellasi ole useampi ihminen joka käyttäisi ohjelmistoympäristöä) ja paina "Next: Launcher Script".
- Tälläkin ruudulla paina vaan "Next: Default plugins".
- Anna näidenkin olla, ja paina vaan "Next: Featured plugins"
- Tällä ruudulla asenna Scala, Live Edit Tool, Node.JS ja Angular. Suosittelemme jättämään IdeaVim-liitännäinen asentamatta. Liitännäisten asennuttua paina "Start using IntelliJ IDEA".

Asetusten jälkeen IntelliJ avaa Welcome-screenin. IntelliJ IDEA on nyt onnistuneesti asennettu, ja seuraavaksi asennamme TestMyCode-liitännäisen.

<div class="actions">
    <a class="action" href="/courses/general/ohjelmointi/asentaminen/intellij/tmc/">TestMyCode -liitännäisen asentaminen</a>
</div>
