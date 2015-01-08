---
title: Ilmoittautuminen ja alkutoimet
layout: course
main-class: has-aside
sidenav: 2014-ohjelmointi
---
# Ilmoittautuminen

Luo itsellesi käyttäjätunnus Test My Code (eli TMC) -palvelimelle osoitteessa [http://tmc.mooc.fi/mooc/user/new](http://tmc.mooc.fi/mooc/user/new)

Jos sinulla on jo käyttäjätunnus TMC:hen, voit käyttää vanhaa tunnustasi. Varmista että muistat salasanasi oikein ja pääset kirjautumaan osoitteeseen [http://tmc.mooc.fi/mooc/](http://tmc.mooc.fi/mooc/)

Jos olet Helsingin yliopiston opiskelija, on suositeltavaa, että osallistut [tietojenkäsittelytieteen](http://cs.helsinki.fi/) laitoksen normaalisti järjestämille kursseille Ohjelmoinnin perusteet ja Ohjelmoinnin jatkokurssi. Voit myös suorittaa kurssit tekemällä MOOC:in ja osallistumalla joko kurssien erilliskokeisiin tai MOOC:in lopuksi järjestettävään kokeeseen. Lisätietoja täällä: [http://mooc.cs.helsinki.fi/ohjelmointi/helsingin-yliopiston-opiskelijoille](http://mooc.cs.helsinki.fi/ohjelmointi/helsingin-yliopiston-opiskelijoille)

# Ohjelmointiympäristön asennus

**Huomaathan, että nämä ohjeet eivät toimi suoraan keväällä alkavalle kurssille. Julkaisemme ennen kurssin alkua ajantasaiset ohjeet. Nämä toimivat kuitenkin tämän no-deadline-mooc kurssin yhteydessä.** Jos olet opettaja ja haluat varmistua asentaa hyvissä ajoin ennen kurssin alkua sopivat ohjelmat koulusi koneille, suosittelemme lähestymään meitä sähköpostitse mooc@cs.helsinki.fi

Koska ohjelmoimme heti kurssin alusta ammattimaisilla työvälineillä, on niiden asentaminen välttämätöntä.

Olet kohta valmis aloittamaan kurssin. Lue asennusohjeet huolellisesti!

Kurssin tehtävät tehdään ja palautetaan NetBeans-kehitystyökalun avulla. Käytämme kurssilla NetBeansin versiota 8.0 sekä NetBeansiin liitettyä TMC -liitännäistä, joka huolehtii tehtävien lähettämisestä tehtäväpalvelimelle.

Toimiakseen NetBeans vaatii Javan ohjelmistokehitystyökalut eli JDK:n.

**HUOM:** Jos sinulla on koneellasi vanha versio NetBeansista, suosittelemme että poistat sen ennen asentamista. Jos uuden version asentaminen kysyy tuodaanko asetukset vanhasta versiosta (import settings), vastaa "ei".

**Onko Javan asentaminen koneelle tietoturvariski:** Ei suoraan. Javan kehitysympäristön ja NetBeansin käyttö ei aiheuta mitään vaaraa. Ainoastaan joidenkin web-sivujen sisältämät Java-komponentit voivat aiheuttaa tietoturvariskin. MOOC-kurssella ei tehdä mitään, mikä vaarantaa koneesi tietoturvan. Koska usein JDKn mukana tulee myös Javan selainliitännäinen (eli plugin), on suositeltavaa ottaa Java pois käytöstä selaimessa (disable). Tarkempi kuvaus siitä miten Java poistetaan käytöstä selaimessa löytyy osoitteesta: [http://krebsonsecurity.com/how-to-unplug-java-from-the-browser/](http://krebsonsecurity.com/how-to-unplug-java-from-the-browser/). 

1. JDK:n asennus

	Jos tiedät että koneessasi on jo JDK 7 tai uudempi, voit siirtyä seuraavaan vaiheeseen.

	Lataa JDK:n uusin versio "Java SE Development Kit 8u5" (tai uudempi) osoitteesta [http://www.oracle.com/technetwork/java/javase/downloads/index.html](http://www.oracle.com/technetwork/java/javase/downloads/). Jos koneesi on Linux, ks. myös maininta alla.

	Hyväksy lisenssi, valitse koneeseesi sopiva versio ja suorita asennus

	- Windowsissa asentaminen onnistuu nappia painamalla, kuten minkä tahansa muun Windows-ohjelman asentaminen.
	- Macissa asennus tapahtuu kuin minkä tahansa dmg-paketin asennus. HUOM. Tarvitset Mac OS X 10.7.3:n (Lion) tai uudemman OS X -version.
	- Useimmissa Linux-järjestelmissä saat Java 7 version suoraan suoraan pakettienhallinnasta, ja sen käyttäminen käy hyvin. Debian-pohjaisissa Linuxeissa (esim. Ubuntu) riittää paketin openjdk-7-jdk asentaminen. Voit asentaa sen komentoriviltä komennolla apt-get install openjdk-7-jdk -y, tai Synaptic Package managerin avulla. Mikäli tuoretta Javaa ei pakettienhallinnasta löydy, tapahtuu asentaminen purkamalla Oraclen sivulla oleva .tar.gz-päätteinen pakattu tiedosto sopivaan paikkaan.

2. NetBeansin asennus

	**JDK tulee olla asennettuna ennen NetBeansin asennusta.**

	Lataa käyttöjärjestelmällesi sopiva TMC-liitännäisen sisältävä NetBeans painamalla linkin kohdalla hiiren oikeaa nappia ja valitsemalla "Save link as":

	- [Windows](http://update.testmycode.net/installers/tmc-netbeans_mooc/tmc-netbeans_mooc_tmcbeans-windows.exe)

		Windowsissa asentaminen onnistuu nappia painamalla, kuten minkä tahansa muun Windows-ohjelman asentaminen.

	- [OS X (Mac)](http://update.testmycode.net/installers/tmc-netbeans_mooc/tmc-netbeans_mooc_tmcbeans-macosx.tgz) 

		Macissa asentaminen tapahtuu purkamalla ladattu tiedosto ja suorittamalla pakkauksesta purettu "NetBeans with TMC Installer.app". Asennusohjelma (eli installer) asentaa TMC-Netbeansin koneelle. Tämän jälkeen se löytyy Applications-kansiosta nimellä tmcbeans.app. HUOM. Mikäli sinulla on Mountain Lion, voit joutua suorittamaan TMC Installer.app -ohjelman klikkaamalla sitä hiiren kakkospainikkeella (trackpadilla kahdella sormella) ja avautuvasta valikosta valita Open/Avaa. ([http://support.apple.com/kb/ht5290](http://support.apple.com/kb/ht5290))

	- [Linux](http://update.testmycode.net/installers/tmc-netbeans_mooc/tmc-netbeans_mooc_tmcbeans-linux.sh)
		
		Linuxissa asentaminen tapahtuu suorittamalla ladattu asennustiedosto antamalla sen sijaintihakemistossa komento `sudo ./tmc-netbeans_mooc_tmcbeans-linux.sh`

		- Jotta suoritus onnistuu, on tiedostolle annettava suoritusoikeus komennolla `chmod o+x tmc-netbeans_mooc_tmcbeans-linux.sh`
		- Esim. Ubuntussa suoritusoikeuden antaminen onnistuu myös File browserin avulla, klikkaamalla tiedoston kohdalla oikeaa hiiren nappia ja valitsemalla Properties / Permissions / Allow executing file as program. Tämän jälkeen tiedoston voi suorittaa File browserista klikkaamalla tiedostoa.

# Tehtävien tekeminen ja palautus

Kun käynnistät TMC-liitännäisen sisältävän NetBeansin ensimmäistä kertaa, alla olevassa kuvassa olevan TMC:n asetusnäkymän pitäisi avautua automaattisesti. **Jos näin ei käy, valitse NetBeansin TMC-valikosta Settings**.

![TMC Settings](img/mooc-settings.jpg)

Laita kohtaan *"Username"* ja *"Password"* TMC-palvelimelle rekisteröimäsi käyttäjätunnus ja salasana.

Paina nappia *"Refresh list"* ja valitse kohdasta *"Current course"* kurssiksi 2014-mooc-no-deadline.

Painamalla *"OK"* latautuvat tehtäväpohjat koneellesi.

Seuraava video näyttää miten tehtävien tekeminen ja palauttaminen NetBeansilla ja TMC:llä tapahtuu.

<iframe width="420" height="315" src="//www.youtube.com/embed/sQYq2LISMRU" frameborder="0" allowfullscreen></iframe>

Nyt olet valmis aloittamaan kurssin!

Kannattaa lukea nyt tai myöhemmin yleiset [ohjeet](ohjeita.html)!