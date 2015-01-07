---
title: Ohjeita
layout: course
main-class: has-aside
sidenav: 2014-ohjelmointi
---
# USEIN KYSYTTYJÄ KYSYMYKSIÄ

1. EN OSAA TEHDÄ TEHTÄVÄÄ N?

	Apua tehtävän tekemiseen löydät materiaalista sekä internetistä. Erityisen suositeltavaa on liittyä IRCnetissä olevalle kanavalle #mooc.fi, katso lisäohjeita seuraavasta [http://mooc.cs.helsinki.fi/content/irc-ohjeet](http://mooc.cs.helsinki.fi/content/irc-ohjeet)

2. MITEN ESITÄN ONGELMANI IRC:SSÄ?

	*"Don't ask to ask, just ask"*

	Esitä ongelmasi suoraan, kanavalla joku vastaa sinulle aikanaan (arviolta noin 5-20 minuutin kuluessa). Jos kysymys koskee koodia, jaa koodi seuraavasti: NetBeanssissa paina **TMC -> Send code to TMC Pastebin -> Send ->** kopioi saamasi linkki ja lähetä se kysymyksesi yhteydessä.

3. TEHTÄVÄN N TESTEISSÄ ON ONGELMA?

	Jos huomaat, että jonkun tehtävän testissä on ongelma, esim. huono virheilmoitus, voit pyytää kurssihenkilökuntaa tarkastamaan asian. 

	Käytä ongelmien raportointiin osoitteessa [http://sourceforge.net/p/mooc-issues/tickets/](http://sourceforge.net/p/mooc-issues/tickets/) olevaa bugiträkkeriä

4. MISTÄ NÄEN MITÄ TEHTÄVIÄ OLEN JO PALAUTTANUT JA MILLOIN TEHTÄVÄT PITÄISI PALAUTTAA?

	TMC-palvelimen pääsivulta [https://tmc.mooc.fi/mooc/](https://tmc.mooc.fi/mooc/) pääset kurssin sivulle [https://tmc.mooc.fi/mooc/courses/20/](https://tmc.mooc.fi/mooc/courses/20/), jolla on näkyvissä tehtävien deadlinet ja omat palautuksesi. Jo palauttamiesi tehtävien esimerkkivastaukset näet klikkaamalla tehtävän nimeä.

5. SALASANANI ON UNOHTUNUT, MITÄ TEEN?

	Voit asettaa itsellesi uuden salasanan TMC-palvelimella osoitteessa [https://tmc.mooc.fi/mooc/password_reset_keys/new](https://tmc.mooc.fi/mooc/password_reset_keys/new)

6. KYSYÄKSENI APUA VIRHEESEEN, KUINKA NÄYTÄN KOODINI HELPOSTI AVUNANTAJALLE VERKON YLITSE?

	Voit käyttää "pastebiniä"; esimerkiksi rakentamaamme [http://paste.mooc.fi](http://paste.mooc.fi -palvelua) -palvelua.

7. VOINKO TEHDÄ TEHTÄVIÄ KAHDELLA ERI KONEELLA?

	Voit. Jos TMC-liitännäisen sisältävä NetBeans on asennettu molemmille koneille, ei ongelmaa ole.

	Tekemiäsi tehtäviä voi myös siirtää koneelta toiselle:

	- Manuaalinen kopiointi TMC palvelimelta
		
		1. Olet tehnyt tehtävän X koneella A ja palauttanut sen TMC:lle. Voit palauttaa siis keskeneräisen tehtävän palvelimelle ja ladata sen sieltä myöhemmin.
		2. Jos haluat tekemäsi koodin koneelle B, voit ensin joutua lataamaan tehtäväpohjan:
			- Mikäli et ole vielä ratkaissut tehtävää, latautuu tehtäväpohja koneellesi muiden tehtäväpohjien mukana.
			- Mikäli olet jo tehtävän ratkaissut, valitse NetBeansin TMC-valikosta "Download old completed exercises" niin saat tehtäväpohjan ladattua.
		3. Voit ladata palauttamiesi tehtävien koodit osoitteesta [https://tmc.mooc.fi/mooc](https://tmc.mooc.fi/mooc), kirjautumalla sinne sisään näet kaikki palvelimelle lähettämäsi ratkaisut. Helpoimmalla pääset kopioimalla koodin suoraan selaimesta NetBeansiin, mutta voit ladata koodin myös zip-pakkauksessa.

	- Ulkopuolisen palvelun hyödyntäminen
		
		Esimerkiksi [DropBoxilla](https://www.dropbox.com/) voit helposti synkronoida kansion useamman koneen välillä. Tässä siis ideana, että laittaa DropBoxin synkronoimaan kansion, johon NetBeans tehtävät lataa. Näet tämän kansion TMC:n asetuksista.
	- USB-tikun käyttö
		
		Voit kopioida tehtävät käsin USB-tikulle ja sieltä toiselle koneelle.
8. KAIKKI TEHTÄVÄT EIVÄT LATAUDU?

	Jos käy niin, että osa tehtävistä ei näytä latautuvan koneellesi, toimi seuraavasti:

	1. Katso NetBeansin TMC-valikon Settings-valikosta minne TMC tallentaa tehtäväpohjat (project folder).
	2. Kurssin tehtävät tallentuvat ko. kansion alikansioon 2014-mooc-no-deadline/
	3. Valitse NetBeansin File-valikosta "Open project", etsi kansio, jonne TMC-tallettaa tehtävät ja valitse avattaville projekteille "Open project".
9. NETBEANSIN ASENNUS EI ONNISTUNUT SIVULLA ILMOITTAUTUMINEN JA ALKUTOIMET OLEVAN OHJEEN MUKAAN?

	Jos et jostain syystä saanut NetBeansia ja TMC-liitännäistä toimimaan sivulla "Ilmoittautuminen ja alkutoimet" olevan asennusohjeen mukaan, voit kokeilla [täällä](http://mooc.cs.helsinki.fi/2014-ohjelmointi/netbeansin-ja-tmc-liit%C3%A4nn%C3%A4isen-asentaminen) olevaa, hieman monimutkaisempaa vaihtoehtoa, jossa NetBeans ja TMC-liitännäinen asennetaan erikseen.

10. VOINKO PALAUTTAA TEHTÄVÄN PALVELIMELLE MONTA KERTAA?

	Voit. Palautuskertoja palvelimelle ei ole rajoitettu. Pisteiden saantiin riittää, että saat ne jollain palautuskerralla.

 

# NETBEANSILLA TYÖSKENTELYÄ HELPOTTAVIA NÄPPÄINKOMENTOJA YM.

Allaolevat ohjeet löytyvät myös kurssimateriaalista ja osa niistä tulee ajankohtaiseksi vasta kurssin puolivälin jälkeen.

1. AUTOMAATTINEN SYSTEM.OUT.PRINTLN

	Kirjoita sout ja paina tabulaattoria (q:n vasemmalla puolella oleva näppäin), editoriin tulee automaattisesti System.out.println

2. AUTOMAATTINEN SISENNYS

	Aktivoi editori-ikkunaan tiedosto, jonka haluat sisentää. Paina yhtä aikaa alt, shift ja f. Vaihtoehtoisesti voit valita yläpalkista Source ja sen alta format

3. KOODIN AUTOMAATTINEN TÄYDENNYS

	Jos ohjelmassasi on käytössä esim. muuttuja String sukunimi;, ei koko muuttujan nimeä tarvitse välttämättä joka kerta kirjoittaa kokonaan. Kokeile mitä tapahtuu kun kirjoitat s ja sen jälkeen painat yhtäaikaa ctrl ja välilyönti.

4. UUDELLEENNIMENTÄ

	Muuttujat, metodit ja luokat kannattaa nimetä kuvaavasti. Usein käy, että nimi on hieman epäkuvaava ja tulee tarve nimen muuttamiselle. NetBeans:issa tämä on todella helppoa. Maalaa huono nimi jostain kohtaa koodiasi hiirellä. Paina (yhtäaikaa) ctrl ja r ja kirjoita muuttujalle/metodille uusi nimi. Nimi muuttuu kaikkialta ohjelmasta!

5. TYHJÄN RIVIN NYKYISEN RIVIN ALAPUOLELLE

	Koodiin saa tehtyä uuden tyhjän painamalla shift+enter, oli osoitin missä kohtaa riviä tahansa.

6. KONSTRUKTORIEN, GETTERIEN JA SETTERIEN AUTOMAATTINEN LUOMINEN

	Mene luokan koodilohkon sisäpuolelle mutta kaikkien metodien ulkopuolelle ja paina yhtä aikaa ctrl ja välilyönti. Jos luokallasi on esim. oliomuuttuja , tarjoaa NetBeans mahdollisuuden luoda (eli generoida) oliomuuttujalle getteri- ja setterimetodit sekä konstruktorin, joka asettaa oliomuuttujalle alkuarvon.

7. IMPLEMENT ALL ABSTRACT METHODS

	Oletetaan että ohjelmassasi on rajapinta, ja olet tekemässä rajapinnan toteuttavaa luokkaa . Joudut näkemään hieman vaivaa kirjoittaessasi toteuttavaan luokkaan rajapinnan määrittelemien metodien esittelyrivit.

	On kuitenkin mahdollista pyytää NetBeansia täydentämään automaattisesti metodirungot toteuttavalle luokalle. Kun olet määritellyt luokan toteuttavan rajapinnan, eli kirjoittanut
	
	    public class Luokka implements Rajapinta {
	         
	    }
	 

	NetBeans värjää luokan nimen punaisella. Mene rivin vasemmassa reunassa olevan lamppusymbolin kohdalle, klikkaa ja valitse Implement all abstract methods ja metodirungot ilmestyvät koodiin!

8. CLEAN AND BUILD

	Tietyissä tilanteissa NetBeans saattaa mennä sekaisin ja yrittää ajaa koodista versiota, joka ei huomioi kaikkia koodiin kirjoitettuja muutoksia. Yleensä huomaat tilanteen siten, että jotain "outoa" vaikuttaa tapahtuvan. Ongelman korjaa usein Clean and build -operaation suorittaminen. Operaatio löytyy Run-valikosta ja sen voi suorittaa myös painamalla harja ja vasara -symbolia. Clean and build poistaa koodista olemassa olevat käännetyt versiot ja tekee uuden käännöksen.

# LINKKEJÄ MUIHIN NETBEANS-OHJEISIIN
- [Keyboard shortcuts](http://netbeans.org/project_downloads/www/shortcuts.pdf)
- [Ohjeita Mac OS X -käyttäjille](http://netbeans.org/kb/articles/mac.html)