---
title: Ohjeita
layout: course
---
# Usein kysyttyjä kysymyksiä

1. En osaa tehdä tehtävää N?

	Apua tehtävän tekemiseen löydät materiaalista sekä internetistä. Erityisen suositeltavaa on liittyä IRCnetissä olevalle kanavalle #mooc.fi, katso lisäohjeita seuraavasta [http://mooc.cs.helsinki.fi/content/irc-ohjeet](http://mooc.cs.helsinki.fi/content/irc-ohjeet)

2. Miten esitän ongelmani IRC:ssä?

	*"Don't ask to ask, just ask"*

	Lue [IRC-ohjeet](irc-ohjeet.html)

3. Tehtävän N testeissä on ongelma?

	Jos huomaat, että jonkun tehtävän testissä on ongelma, esim. huono virheilmoitus, voit pyytää kurssihenkilökuntaa tarkastamaan asian. 

	Käytä ongelmien raportointiin osoitteessa <http://sourceforge.net/p/mooc-issues/tickets/>

4. Mistä näen mitä tehtäviä olen jo palauttanut ja milloin tehtävät pitäisi palauttaa?

	TMC-palvelimen pääsivulta <https://tmc.mooc.fi/mooc/> pääset kurssin sivulle, jossa on näkyvissä mm. tehtävien deadlinet. Kirjautumalla näet omat palautuksesi sekä pääset tarkastelemaan palauttamiesi tehtävien esimerkkivastauksia.

5. Salasanani on unohtunut, mitä teen?

	Voit asettaa itsellesi uuden salasanan TMC-palvelimella osoitteessa [https://tmc.mooc.fi/mooc/password_reset_keys/new](https://tmc.mooc.fi/mooc/password_reset_keys/new)

6. Kysyäkseni apua virheeseen, kuinka näytän koodini helposti avunantajalle verkon ylitse?

	Mikäli kurssilla on käytössä NetBeans-ohjelmointiympäristö ja kysymyksesi koskee koodia, jaa koodi seuraavasti: NetBeanssissa paina **TMC -> Send code to TMC Pastebin -> Send ->** kopioi saamasi linkki ja lähetä se kysymyksesi yhteydessä.

	Muussa tapauksessa voit voit käyttää jotakin "pastebiniä"; esimerkiksi rakentamaamme <http://paste.mooc.fi> -palvelua.

7. Voinko tehdä tehtäviä kahdella eri koneella?

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
8. Kaikki tehtävät eivät lataudu?

	Jos käy niin, että osa tehtävistä ei näytä latautuvan koneellesi, toimi seuraavasti:

	1. Katso NetBeansin TMC-valikon Settings-valikosta minne TMC tallentaa tehtäväpohjat (project folder).
	2. Kurssin tehtävät tallentuvat ko. kansion alikansioon 2014-mooc-no-deadline/
	3. Valitse NetBeansin File-valikosta "Open project", etsi kansio, jonne TMC-tallettaa tehtävät ja valitse avattaville projekteille "Open project".

9. Voinko palauttaa tehtävän palvelimelle monta kertaa?

	Voit. Palautuskertoja palvelimelle ei ole rajoitettu. Pisteiden saantiin riittää, että saat ne jollain palautuskerralla.

# NetBeansilla työskentelyä helpottavia näppäinkomentoja ym.

Allaolevat ohjeet löytyvät myös kurssimateriaalista ja osa niistä tulee ajankohtaiseksi vasta kurssin puolivälin jälkeen.

1. Automaattinen System.out.println

	Kirjoita sout ja paina tabulaattoria (q:n vasemmalla puolella oleva näppäin), editoriin tulee automaattisesti System.out.println

2. Automaattinen sisennys

	Aktivoi editori-ikkunaan tiedosto, jonka haluat sisentää. Paina yhtä aikaa alt, shift ja f. Vaihtoehtoisesti voit valita yläpalkista Source ja sen alta format

3. Koodin automaattinen täydennys

	Jos ohjelmassasi on käytössä esim. muuttuja String sukunimi;, ei koko muuttujan nimeä tarvitse välttämättä joka kerta kirjoittaa kokonaan. Kokeile mitä tapahtuu kun kirjoitat s ja sen jälkeen painat yhtäaikaa ctrl ja välilyönti.

4. Uudelleennimentä

	Muuttujat, metodit ja luokat kannattaa nimetä kuvaavasti. Usein käy, että nimi on hieman epäkuvaava ja tulee tarve nimen muuttamiselle. NetBeans:issa tämä on todella helppoa. Maalaa huono nimi jostain kohtaa koodiasi hiirellä. Paina (yhtäaikaa) ctrl ja r ja kirjoita muuttujalle/metodille uusi nimi. Nimi muuttuu kaikkialta ohjelmasta!

5. Tyhjän rivin nykyisen rivin alapuolelle

	Koodiin saa tehtyä uuden tyhjän painamalla shift+enter, oli osoitin missä kohtaa riviä tahansa.

6. Konstruktorien, getterien ja setterien automaattinen luominen

	Mene luokan koodilohkon sisäpuolelle mutta kaikkien metodien ulkopuolelle ja paina yhtä aikaa ctrl ja välilyönti. Jos luokallasi on esim. oliomuuttuja , tarjoaa NetBeans mahdollisuuden luoda (eli generoida) oliomuuttujalle getteri- ja setterimetodit sekä konstruktorin, joka asettaa oliomuuttujalle alkuarvon.

7. Implement all abstract methods

	Oletetaan että ohjelmassasi on rajapinta, ja olet tekemässä rajapinnan toteuttavaa luokkaa . Joudut näkemään hieman vaivaa kirjoittaessasi toteuttavaan luokkaan rajapinnan määrittelemien metodien esittelyrivit.

	On kuitenkin mahdollista pyytää NetBeansia täydentämään automaattisesti metodirungot toteuttavalle luokalle. Kun olet määritellyt luokan toteuttavan rajapinnan, eli kirjoittanut
	
	```java
	public class Luokka implements Rajapinta {

	}
	```

	NetBeans värjää luokan nimen punaisella. Mene rivin vasemmassa reunassa olevan lamppusymbolin kohdalle, klikkaa ja valitse Implement all abstract methods ja metodirungot ilmestyvät koodiin!

8. Clean and build

	Tietyissä tilanteissa NetBeans saattaa mennä sekaisin ja yrittää ajaa koodista versiota, joka ei huomioi kaikkia koodiin kirjoitettuja muutoksia. Yleensä huomaat tilanteen siten, että jotain "outoa" vaikuttaa tapahtuvan. Ongelman korjaa usein Clean and build -operaation suorittaminen. Operaatio löytyy Run-valikosta ja sen voi suorittaa myös painamalla harja ja vasara -symbolia. Clean and build poistaa koodista olemassa olevat käännetyt versiot ja tekee uuden käännöksen.

# LINKKEJÄ MUIHIN NETBEANS-OHJEISIIN
- [Keyboard shortcuts](http://netbeans.org/project_downloads/www/shortcuts.pdf)
- [Ohjeita Mac OS X -käyttäjille](http://netbeans.org/kb/articles/mac.html)