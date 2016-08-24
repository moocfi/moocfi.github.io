# tmc asennusohjeet Intellij:tä varten tähän

---
title: Ympäristön asentaminen &ndash; TMC
layout: course
main-class: has-aside
sidenav: general/ohjeita
---
Jotta tehtävien palauttaminen onnistuisi, on IntelliJ:hin asennettava TMC-liitännäinen.

Käynnistä IntelliJ IDEA -ohjelmointiympäristö.

Mikäli et ole tehnyt aiemmin yhtäkään projektia IntelliJ:llä, IntelliJ avaa Welcome screenin. Aloitetaan TMC-liitännäisen asennus.

1. Valitse alapalkista Configure / Plugins.

2. Paina Browser Repositories-nappia alhaalla.

3. Kirjoita hakukenttään TMC, ja tulokseksi pitäisi tulla TMC Plugin for IntelliJ.

4. Valitse Install. Anna pluginin latautua (siinä ei pitäisi kestää kauaa).

5. Valitse Restart IntelliJ IDEA käynnistääksesi IntelliJ:n uudestaan.

# Seuraavaksi

# Seuraavaksi

Onnistuneen asennuksen jälkeen, siirry luomaan itsellesi käyttäjätunnusta TestMyCode -tarkistusjärjestelmäämme. 

Mikäli olet jo aiemmin luonut käyttäjätunnuksen esimerkiksi jotain toista kurssiamme varten, voit käyttää sitä ja siirtyä takaisin kurssille.

<div class="actions">
    <a class="action" href="/courses/general/ohjelmointi/rekisteroityminen/">Siirry luomaan tunnuksia</a>
</div>











###### (tmc-netbeansin ohjeet tässä):: --------------------------------------
---
title: Ympäristön asentaminen &ndash; TMC
layout: course
main-class: has-aside
sidenav: general/ohjeita
---
Jotta tehtävien palauttaminen onnistuisi, on NetBeansiin asennettava TMC-liitännäinen.

Käynnistä NetBeans-ohjelmointiympäristö.

NetBeans koostuu useammasta ikkunasta. Vasemmalla laidalla on projektivalikko, sekä välilehdet tiedostoille (projektiin liittyvät ei-projektinäkymässä näkyvät tiedostot, esimerkiksi testidata ym.) ja palveluille (esim. tietokantayhteydet ja palvelimet). Tällä hetkellä meillä ei ole yhtään käytössä olevaa projektia. Alalaidassa on tulostusalue.

Keskellä olevassa ikkunassa saattaa olla linkkejä erilaisiin blogeihin ja web-posteihin. Voit sulkea kyseisen ikkunan halutessasi.

Aloitetaan TMC-liitännäisen asennus. 

1. Valitse yläpalkista Tools / Plugins.
  ![NetBeans Tools->Plugins]({{"/img/install/plugin-install/plugin-2.png" | prepend: site.baseurl}})
2. Eteesi aukeaa plugins-ikkuna. Valitse ikkunasta välilehti Settings ja klikkaa Add.
  ![NetBeans Plugins Settings->Add]({{"/img/install/plugin-install/plugin-5.png" | prepend: site.baseurl}})
3. Eteesi aukeaa ikkuna, johon sinun tulee täyttää liitännäisen lähdetiedot.
    ![NetBeans Plugins Source]({{"/img/install/plugin-install/plugin-6.png" | prepend: site.baseurl}})
    
    3.1. Kirjoita kenttään *Name* esimerkiksi "TMC".

    3.2. Kopioi URL-kenttään teksti: <http://update.testmycode.net/tmc-netbeans_mooc/updates.xml>

4. Pääset takaisin plugins-ikkunaan. Valitse ikkunasta välilehti Available Plugins, ja kirjoita Search-kenttään TMC.
    
    ![NetBeans Plugins Source]({{"/img/install/plugin-install/plugin-10.png" | prepend: site.baseurl}})
    
    4.1. Klikkaa ruksi valituksi ja paina install
        ![NetBeans Plugins Source]({{"/img/install/plugin-install/plugin-12.png" | prepend: site.baseurl}})
        ![NetBeans Plugins Source]({{"/img/install/plugin-install/plugin-13.png" | prepend: site.baseurl}})
5. Hyväksy lisenssiehdot asennuksen aikana

    ![NetBeans Plugins Source]({{"/img/install/plugin-install/plugin-15.png" | prepend: site.baseurl}})

    Asennusvaiheessa saatat törmätä seuraavaan ilmoitukseen, jatka asentamista painamalla "Continue".

    ![NetBeans Plugins Source]({{"/img/install/plugin-install/plugin-16.png" | prepend: site.baseurl}})

9. Kun asennus on valmis käynnistä NetBeans uudelleen

	![NetBeans Plugins Source]({{"/img/install/plugin-install/plugin-17.png" | prepend: site.baseurl}})

# Seuraavaksi

Onnistuneen asennuksen jälkeen, siirry luomaan itsellesi käyttäjätunnusta TestMyCode -tarkistusjärjestelmäämme. 

Mikäli olet jo aiemmin luonut käyttäjätunnuksen esimerkiksi jotain toista kurssiamme varten, voit käyttää sitä ja siirtyä takaisin kurssille.

<div class="actions">
    <a class="action" href="/courses/general/ohjelmointi/rekisteroityminen/">Siirry luomaan tunnuksia</a>
</div>
