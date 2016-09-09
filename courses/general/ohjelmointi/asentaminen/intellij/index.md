---
title: Ympäristön asentaminen &ndash; IntelliJ IDEA
layout: course
main-class: has-aside
sidenav: general/ohjeita
---

<div class="warning-banner">
  <p>Liitännäinen on vielä testausvaiheessa: erilaiset ongelmatilanteet ovat todennäköisempiä kuin NetBeans-liitännäisen kanssa.</p>
  <p>Käyttäjiltä toivotaan palautetta liitännäisen toiminnasta, sekä erityisesti raportteja sen kanssa ilmenevistä ongelmatilanteista.</p>
</div>

Mikäli et ole aiemmin asentanut Java Development Kit -ohjelmapakettia (JDK), tulee se asentaa ensimmäisenä:

<div class="actions">
    <a class="action" href="/courses/general/ohjelmointi/asentaminen/intellij/java">Javan asentaminen</a>
</div>

Siirrymme seuraavaksi asentamaan IntelliJ IDEA -kehitysympäristön. Mikäli koneltasi löytyy valmiiksi ympäristön uusin versio, voit ohittaa tämän vaiheen.

IntelliJ IDEA:sta on tarjolla sekä maksullinen *Ultimate*-versio, sekä maksuton *Community*-versio. TMC-liitännäisemme toimii molempien versioiden kanssa, ja Community-version toiminnallisuus riittää esimerkiksi Ohjelmoinnin MOOC-kurssien suorittamiseen. Mikäli suoritat esimerkiksi Web-palvelinohjelmoinnin MOOC-kurssia, suosittelemme käyttämään joko Ultimate-versiota tai NetBeansia.

IntelliJ IDEA:n kehittäjä, JetBrains tarjoaa kaikkien kehitysympäristöjensä maksulliset versiot ilmaiseksi tiettyjen korkeakouluopiskelijaryhmien käyttöön. Voit tarkastaa oletko tarjouksen piirissä sivulta <a href="https://www.jetbrains.com/student/" target="_blank">https://www.jetbrains.com/student/</a>. Mooc.fi tai Helsingin Yliopisto ei ole erityisessä yhteistössä JetBrainsin kanssa, mutta Helsingin Yliopiston opiskelijat ovat ainakin toistaiseksi oikeutettuja tarjoukseen.

Kehitysympäristön asentamisen alkutoimet tapahtuvat hieman eri tavalla eri käyttöjärjestelmillä. Valitse alta oma käyttöjärjestelmäsi:

<div class="actions">
    <a class="action" href="#windows">Windows</a>
    <a class="action" href="#mac-os-x">Max OS X</a>
    <a class="action" href="#linux">Linux</a>
</div>

# Windows

1. Mene osoitteeseen <https://www.jetbrains.com/idea/download/#section=windows> ja paina Download-painiketta haluamasi version alta (Community tai Ultimate).

2. Lataa exe-tiedosto haluamaasi paikkaan. Tiedoston latauduttua asenna IntelliJ IDEA ajamalla tiedosto. Asennus tapahtuu kuten normaalin Windows-ohjelman asentaminen. Huomaa kuitenkin seuraava kohta: Valitse 64-bit launcher, mikäli sellainen vaihtoehto on näkyvillä. Jos ei, valitse 32-bit launcher. "Create assosiations" -kohdan voit jättää huomiotta. Paina Next.

Tässä vaiheessa voit siirtyä [ensimmäiseen käynnistykseen](#seuraavaksi).

# Linux

1. Mene osoitteeseen <https://www.jetbrains.com/idea/download/#section=linux> ja paina Download-nappia haluamasi version alla (Community tai Ultimate).

2. Talleta pakattu tar.gz-tiedosto haluamasi paikkaan ja siirry paikkaan johon sen latasit. Tiedoston latauduttua pura (extract) tiedosto haluaamasi paikkaan.

3. Avaa komentorivi, siirry puretun kansion sisälle (cd-komennolla, esim. cd idea-IU-162.1628.40, mikäli purit tiedoston Home-hakemistosi juureen), ja siellä bin-kansioon ja kirjoita ./idea.sh ja etene asennuswizardin ohjeiden mukaan.

Tässä vaiheessa voit siirtyä [ensimmäiseen käynnistykseen](#seuraavaksi).

# Mac OS X

1. Mene osoitteeseen <https://www.jetbrains.com/idea/download/#section=mac> ja paina Download-nappia haluamasi version alla (Community tai Ultimate).

2. Talleta .dmg-hakemisto haluamaasi paikkaan.

3. Avaa ladattu .dmg-paketti ja siirrä IDEA-app omaan Applications-hakemistoosi.

Tässä vaiheessa voit siirtyä [ensimmäiseen käynnistykseen](#seuraavaksi).

# Ensimmäinen käynnistyskerta

1. Ensimmäisen kerran IntelliJ:tä avattaessa, ohjelma kysyy onko sinulla valmiita asetuksia jotka haluaisit tuoda ohjelmistoympäristöön. Valitse "I do not have a previous version of IntelliJ IDEA or I do not want to import my settings" ja paina OK.

2. **Jos asensit Ultimate-version**, tässä vaiheessa sinulta kysytään lisenssiä: syötä lisenssisi tiedot jotta pääset jatkamaan. Mikäli loit tunnuksesi äskettäin, on oikea aktivointitapa todennäköisesti "Activate license with Jetbrains Account".

3. Vastaa IntelliJ:n asetusvelhon kysymyksiin. Suosittelemme asentamaan kohdassa "Featured Plugins" liitännäiset *Scala*, *Live Edit Tool*, *Node.JS* ja *Angular*. Suosittelemme että **et** asenna liitännäistä *IdeaVIM*, jollet ole kokenut VIM-käyttäjä.


Asetusten jälkeen IntelliJ avaa Tervetuloa-ikkunan. Siirrymme nyt asentamaan TestMyCode-liitännäistä.

<div class="actions">
    <a class="action" href="/courses/general/ohjelmointi/asentaminen/intellij/tmc/">TestMyCode -liitännäisen asentaminen</a>
</div>
