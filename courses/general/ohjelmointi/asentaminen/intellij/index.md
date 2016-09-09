---
title: Ympäristön asentaminen &ndash; IntelliJ IDEA
layout: course
main-class: has-aside
sidenav: general/ohjeita
---

<div class="warning">
  <p>Liitännäinnen on vielä testauvaiheessa ja erilaiset ongelmatilanteet ovat todennäköisempiä kuin NetBeans-liitännäisen kanssa. Käyttäjiltä toivotaan palautetta liitännäisen toiminnasta, sekä erityisesti raportteja sen kanssa ilmenevistä ongelmatilanteista.</p>
</div>



Jos sinulla ei ole vielä JDK:ta (Java Development Kit) asennettuna koneellasi, asenna se ensimmäiseksi. Jos on, niin voit hypätä seuraavan linkin ohi.

<div class="actions">
    <a class="action" href="/courses/general/ohjelmointi/asentaminen/intellij/java">Javan asentaminen</a>
</div>

IntelliJ IDEA:sta on tarjolla sekä maksullinen *Ultimate*-versio, sekä maksuton *Community*-versio. TMC-liitännäisemme toimii molempien versioiden kanssa, ja Community-version toiminnallisuus riittää esimerkiksi Ohjelmoinnin MOOC-kurssien suorittamiseen. Mikäli suoritat esimerkiksi Web-palvelinohjelmoinnin MOOC-kurssia, suosittelemme käyttämään joko Ultimate-versiota tai NetBeansia.

IntelliJ IDEA:n kehittäjä, JetBrains tarjoaa kaikkien kehitysympäristöjensä maksulliset versiot ilmaiseksi tiettyjen korkeakouluopiskelijaryhmien käyttöön. Voit tarkastaa oletko tarjouksen piirissä sivulta <a href="https://www.jetbrains.com/student/" target="_blank">https://www.jetbrains.com/student/</a>. Mooc.fi tai Helsingin Yliopisto ei ole erityisessä yhteistössä JetBrainsin kanssa, mutta Helsingin Yliopiston opiskelijat ovat ainakin toistaiseksi oikeutettuja tarjoukseen.

Lataa ja asenna joko Community- tai Ultimate-versio IntelliJ IDEA:sta tietokoneellesi. Ympäristön asentamisen alkutoimet tapahtuvat hieman eri tavalla eri käyttöjärjestelmillä. Valitse alta oma käyttöjärjestelmäsi:

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
