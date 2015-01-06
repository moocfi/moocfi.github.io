---
title: Ilmoittautuminen ja alkutoimet
layout: course
main-class: has-aside
sidenav: true
---
<header>
	<h1>Ilmoittautuminen ja alkutoimet</h1>
</header>

## Ilmoittautuminen

Luo itsellesi käyttäjätunnus Test My Code (eli TMC) -palvelimelle osoitteessa http://tmc.mooc.fi/mooc/user/new

Jos sinulla on jo käyttäjätunnus TMC:hen, voit käyttää vanhaa tunnustasi. Varmista että muistat salasanasi oikein ja pääset kirjautumaan osoitteeseen http://tmc.mooc.fi/mooc/

Jos olet Helsingin yliopiston opiskelija, on suositeltavaa, että osallistut tietojenkäsittelytieteen laitoksen normaalisti järjestämille kursseille Ohjelmoinnin perusteet ja Ohjelmoinnin jatkokurssi. Voit myös suorittaa kurssit tekemällä MOOC:in ja osallistumalla joko kurssien erilliskokeisiin tai MOOC:in lopuksi järjestettävään kokeeseen. Lisätietoja täällä: http://mooc.cs.helsinki.fi/ohjelmointi/helsingin-yliopiston-opiskelijoille

## Ohjelmointiympäristön asennus

Huomaathan, että nämä ohjeet eivät toimi suoraan keväällä alkavalle kurssille. Julkaisemme ennen kurssin alkua ajantasaiset ohjeet.Nämä toimivat kuitenkin tämän no-deadline-mooc kurssin yhteydessä. (jos olet opettaja ja haluat varmistua asentaa hyvissä ajoin ennen kurssin alkua sopivat ohjelmat koulusi koneille, suosittelemme lähestymään meitä sähköpostitse mooc@cs.helsinki.fi)

Koska ohjelmoimme heti kurssin alusta ammattimaisilla työvälineillä, on niiden asentaminen välttämätöntä.

Olet kohta valmis aloittamaan kurssin. Lue asennusohjeet huolellisesti!

Kurssin tehtävät tehdään ja palautetaan NetBeans-kehitystyökalun avulla. Käytämme kurssilla NetBeansin versiota 8.0 sekä NetBeansiin liitettyä TMC -liitännäistä, joka huolehtii tehtävien lähettämisestä tehtäväpalvelimelle.

Toimiakseen NetBeans vaatii Javan ohjelmistokehitystyökalut eli JDK:n.

HUOM: Jos sinulla on koneellasi vanha versio NetBeansista, suosittelemme että poistat sen ennen asentamista. Jos uuden version asentaminen kysyy tuodaanko asetukset vanhasta versiosta (import settings), vastaa "ei".

Onko Javan asentaminen koneelle tietoturvariski: Ei suoraan. Javan kehitysympäristön ja NetBeansin käyttö ei aiheuta mitään vaaraa. Ainoastaan joidenkin web-sivujen sisältämät Java-komponentit voivat aiheuttaa tietoturvariskin. MOOC-kurssella ei tehdä mitään, mikä vaarantaa koneesi tietoturvan. Koska usein JDKn mukana tulee myös Javan selainliitännäinen (eli plugin), on suositeltavaa ottaa Java pois käytöstä selaimessa (disable). Tarkempi kuvaus siitä miten Java poistetaan käytöstä selaimessa löytyy osoitteesta: http://krebsonsecurity.com/how-to-unplug-java-from-the-browser/. 

1. JDK:n asennus

    Jos tiedät että koneessasi on jo JDK, voit siirtyä seuraavaan vaiheeseen.

    Lataa JDK:n uusin versio "Java SE Development Kit 8u5" (tai uudempi) osoitteesta http://www.oracle.com/technetwork/java/javase/downloads/index.html. Jos koneesi on Linux, ks. myös maininta alla.