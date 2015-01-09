---
title: Ilmoittautuminen ja alkutoimet
layout: course
main-class: has-aside
sidenav: general/ohjelmointi
---
# Ilmoittautuminen

Luo itsellesi käyttäjätunnus Test My Code (eli TMC) -palvelimelle osoitteessa [http://tmc.mooc.fi/mooc/user/new](http://tmc.mooc.fi/mooc/user/new)

Jos sinulla on jo käyttäjätunnus TMC:hen, voit käyttää vanhaa tunnustasi. Varmista että muistat salasanasi oikein ja pääset kirjautumaan osoitteeseen [http://tmc.mooc.fi/mooc/](http://tmc.mooc.fi/mooc/)

# JDK:n asennus
	
Jos tiedät että koneessasi on jo JDK 8 tai uudempi, voit siirtyä seuraavaan vaiheeseen. Mikäli kurssilla ei ole mainintaa Java 8:n käytöstä, toimivat usein vanhemmatkin versiot (>=JDK 1.6). 

Lataa JDK:n uusin versio osoitteesta <http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html>, jos koneesi on Linux katso myös huomautus alempaa.

Hyväksy lisenssi ja valitse koneeseesi sopiva versio ja suorita asennus.

- **Windows**: Asentaminen onnistuu nappia painamalla, kuten minkä tahansa muun Windows-ohjelman asentaminen.
- **OS X** (Mac): Asennus tapahtuu kuin minkä tahansa dmg-paketin asennus. HUOM. Tarvitsee Mac OS X 10.8 (Mountain Lion) tai uudemman OS X version. Oracle tarjoaa tarkemman kuvaksen javan asentamisesta: <http://docs.oracle.com/javase/8/docs/technotes/guides/install/mac_jdk.html>
- **Linux**: JDK:n versiota 8 ei saa vielä juuri minkään diston paketinhallinsta suoraan vaan asentaminen täytyy tehdä käsin purkamalla Oraclen sivuilta löytyvä paketti sopivaan paikkaan. 
	Vanhempi JDK löytyy kuitenkin useimmista pakettienhallinntajärjestelmistä suoraan. Sillon   riittää paketin *openjdk-7-jdk* asentaminen. 

# NetBeansin asentaminen TMC-liitännäisellä

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

**Mikäli asentaminen onnistui ongelmitta voit siirtyä viimeiseen kohtaan.**

# NetBeansin asentaminen käsin

**Jos et jostain syystä saanut NetBeansia ja TMC-liitännäistä toimimaan edellisten asennusohjeiden avulla, voit kokeilla seuraavaa, hieman monimutkaisempaa vaihtoehtoa, jossa NetBeans ja TMC-liitännäinen asennetaan erikseen.**

Lataa uusin NetBeans osoitteesta <https://netbeans.org/downloads/> suosittelemme käyttämään *All-pakettia* toimivuuden takaamiseksi kaikilla kursseilla.

Suorita asentaminen

- **Windows**: 
	1. Asentamisen tulisi onnistua samaan tapaan kuin kaikkien muidenkin ohjelmien asentaminen.
- **OS X (Mac)**: 
	1. Asennuspaketin ladattuasi, suorita asennuspaketti (.dmg-tiedosto)
	2. Ikkunasta, joka aukeaa, tuplaklikkaa pakkausta, jolla on .mpkg pääte. Asennus wizardi aukeaa.
	3. Valitse continue, kun  "This package will run a program to determine if the software can be installed." kysymys ilmestyy.
	4. Valitse continue asennuswizardin aloitussivulla.
	5. Hyväksy lisenssit
	6. Voit halutessasi muuttaa asennuskohdetta, jonka jälkeen valitse *Install*
	7. Syötä asennusoikeudellisen käyttäjän salasana ja valitse OK asennuksen aloittamiseksi.
- **Linux**: 
	1. Asentaminen tapahtuu suorittamalla ladattu asennustiedosto antamalla sen sijaintihakemistossa komento `./tmc-netbeans_mooc-linux.sh`
		- Jotta suoritus onnistuu, on tiedostolle annettava suoritusoikeus komennolla `chmod o+x tmc-netbeans_mooc-linux.sh`
		- Esim. Ubuntussa suoritusoikeuden antaminen onnisutu myös File browserin avulla, klikkaamalla tiedoston kohdalla oikeaa hiiren nappia ja valitsemalla Properties / Permissions / Allow executing file as program. Tämän jälkeen tiedoston voi suorittaa File browserista klikkaamalla tiedostoa
	2. Asennuksen alussa kysytään JDK:n sijaintia, tähän kohtaan tulee laittaa hakemisto johon JDK:n sisältänyt pakkaus purettiin vaiheessa JDK:n asentaminen. 
		- Mikäli käytössäsi on OpenJDK, osaa asennusvelho usein tunnistaa sijainnin automaattisesti, eikä polkua tarvitse itse määritellä

**HUOM1:** NetBeansin tulisi kysyä asennuksen yhteydessä asennetaanko myös JUnit, jota käytetään kurssilla tehtävien tarkistamiseen. Hyväksy lisenssiehdot ja asenna JUnit.

**HUOM2:** Jos koneellasi on tai on ollut vanha versio NetBeansista, uuden version asentaminen saattaa kysyä importataanko vanhan version asetukset, vastaa tällöin *ei*.

# TMC-liitännäisen asentaminen

Jotta tehtävien palauttaminen onnistuisi, on NetBeansiin vielä asennettava TMC-liitännäinen.

Käynnistä NetBeans-ohjelmointiympäristö.

NetBeans koostuu useammasta ikkunasta. Vasemmalla laidalla on projektivalikko, sekä välilehdet tiedostoille (projektiin liittyvät ei-projektinäkymässä näkyvät tiedostot, esimerkiksi testidata ym.) ja palveluille (esim. tietokantayhteydet ja palvelimet). Tällä hetkellä meillä ei ole yhtään käytössä olevaa projektia. Hiiren kursorin osoittamassa kohdassa näkyy yleensä aktiiviset lähdekooditiedostot. Alalaidassa on tulostusalue.

Keskellä olevassa ikkunassa saattaa olla linkkejä erilaisiin blogeihin ja web-posteihin. Voit sulkea tämän ikkunan jos haluat.

Aloitetaan TMC-liitännäisen asennus. 

1. Valitse yläpalkista Tools / Plugins.
2. Eteesi aukeaa plugins-ikkuna. Valitse ikkunasta välilehti Settings ja klikkaa Add.
3. Eteesi aukeaa ikkuna, johon sinun tulee täyttää liitännäisen lähdetiedot.
4. Kirjoita kenttään *Name* esimerkiksi "TMC"
5. Kopioi URL-kenttään teksti: <http://update.testmycode.net/tmc-netbeans_mooc/updates.xml> ja paina OK.
6. Pääset takaisin plugins-ikkunaan. Valitse ikkunasta välilehti Available Plugins, ja kirjoita Search-kenttään TMC.
7. Klikkaa Install-ruksi valituksi ja paina install
8. Hyväksy lisenssiehdot asennuksen aikana
	1. Vastaa mahdollisiin kysymyksiin *Continue* jatkaaksesi asennusta
9. Kun asennus on valmis käynnistä NetBeans uudelleen

# Tehtävien tekeminen ja palautus

Kun käynnistät TMC-liitännäisen sisältävän NetBeansin ensimmäistä kertaa, pitäisi TMC:n asetusnäkymän aueta automaattisesti. Mikäli näin ei kuitenkaan tapahdu, valitse NetBeansin valikosta TMC / Settings.

1. Syötä TMC-palvelimelle rekisteröimäsi käyttäjätunnus kenttään *Username*
2. Syötä käyttäjätunnusta vastaava salasana kenttään *Password*
3. Varmista että *Server address* kentässä oleva osoite on <https://tmc.mooc.fi/mooc>
4. Paina *Refresh list* kurssilistauksen päivittämiseksi
5. Valitse suoritettava kurssi *Current course*-kohdasta
6. Olet nyt valmis ja voit aloittaa tehtävien tekemisen painamalla *OK*

Seuraava video näyttää miten tehtävien tekeminen ja palauttaminen NetBeansilla ja TMC:llä tapahtuu.

<iframe width="420" height="315" src="//www.youtube.com/embed/sQYq2LISMRU" frameborder="0" allowfullscreen></iframe>
