# USEIN KYSYTTYJÄ KYSYMYKSIÄ

1. En osaa tehdä tehtävää N?

	Apua tehtävän tekemiseen löydät materiaalista sekä internetistä. Erityisen suositeltavaa on liittyä IRCnetissä olevalle kanavalle #mooc.fi, katso lisäohjeita seuraavasta [IRC ohjeet]({{"/courses/general/irc-ohjeet.html" | prepend: site.baseurl }}).

2. Miten esitän ongelmani IRC:ssä?

	*"Don't ask to ask, just ask"*

	Esitä ongelmasi suoraan, kanavalla joku vastaa sinulle aikanaan (arviolta noin 5-20 minuutin kuluessa). 

	Mikäli kurssilla on käytössä NetBeans-ohjelmointiympäristö ja kysymyksesi koskee koodia, jaa koodi seuraavasti: NetBeanssissa paina **TMC -> Send code to TMC Pastebin -> Send ->** kopioi saamasi linkki ja lähetä se kysymyksesi yhteydessä.

3. Tehtävän N testeissä on ongelma?

	Jos huomaat, että jonkun tehtävän testissä on ongelma, esim. huono virheilmoitus, voit pyytää kurssihenkilökuntaa tarkastamaan asian tekemällä virheilmoituksen. 

	Käytä ongelmien raportointiin osoitteessa <http://sourceforge.net/p/mooc-issues/tickets/> olevaa bugiträkkeriä

4. Mistä näen mitä tehtäviä olen jo palauttanut ja milloin tehtävät pitäisi palauttaa?

	TMC-palvelimen pääsivulta <https://tmc.mooc.fi/mooc/> pääset kurssin sivulle, jossa on näkyvissä mm. tehtävien deadlinet. Kirjautumalla näet omat palautuksesi sekä pääset tarkastelemaan palauttamiesi tehtävien esimerkkivastauksia klikkaamalla tehtävän nimeä.

5. Salasanani on unohtunut, mitä teen?

	Voit asettaa itsellesi uuden salasanan TMC-palvelimella osoitteessa <https://tmc.mooc.fi/mooc/password_reset_keys/new>

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
		3. Voit ladata palauttamiesi tehtävien koodit osoitteesta <https://tmc.mooc.fi/mooc>, kirjautumalla sinne sisään näet kaikki palvelimelle lähettämäsi ratkaisut. Helpoimmalla pääset kopioimalla koodin suoraan selaimesta NetBeansiin, mutta voit ladata koodin myös zip-pakkauksessa.
	- Ulkopuolisen palvelun hyödyntäminen
		Esimerkiksi [DropBoxilla](https://www.dropbox.com/) voit helposti synkronoida kansion useamman koneen välillä. Tässä siis ideana, että laittaa DropBoxin synkronoimaan kansion, johon NetBeans tehtävät lataa. Näet tämän kansion TMC:n asetuksista.
	- USB-tikun käyttö
		
		Voit kopioida tehtävät käsin USB-tikulle ja sieltä toiselle koneelle.
8. Kaikki tehtävät eivät lataudu?

	Jos käy niin, että osa tehtävistä ei näytä latautuvan koneellesi, toimi seuraavasti:

	1. Katso NetBeansin TMC-valikon Settings-valikosta minne TMC tallentaa tehtäväpohjat (project folder).
	2. Kurssin tehtävät tallentuvat ko. kansion alikansioon 2014-mooc-no-deadline/
	3. Valitse NetBeansin File-valikosta "Open project", etsi kansio, jonne TMC-tallettaa tehtävät ja valitse avattaville projekteille "Open project".
9. NetBeansin asennus ei onnistunut sivulla ilmoittautuminen ja alkutoimet olevan ohjeen mukaan?

	Jos et jostain syystä saanut NetBeansia ja TMC-liitännäistä toimimaan sivulla "Ilmoittautuminen ja alkutoimet" olevan asennusohjeen mukaan, voit kokeilla [täällä]({{"/courses/general/netbeans-ja-tmc-asennusohje.html" | prepend: site.baseurl }}) olevaa, hieman monimutkaisempaa vaihtoehtoa, jossa NetBeans ja TMC-liitännäinen asennetaan erikseen.

10. Voinko palauttaa tehtävän palvelimelle monta kertaa?

	Voit. Palautuskertoja palvelimelle ei ole rajoitettu. Pisteiden saantiin riittää, että saat ne jollain palautuskerralla.