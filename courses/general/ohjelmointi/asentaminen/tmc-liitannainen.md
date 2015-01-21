---
title: TMC-liitännäisen asentaminen (5/6)
layout: course
main-class: has-aside
sidenav: general/asentaminen
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

    3.2. Kopioi URL-kenttään teksti: <http://update.testmycode.net/tmc-netbeans_mooc/updates.xml>.

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

Jatka [tehtävien tekeminen ja palautus]({{"/courses/general/ohjelmointi/asentaminen/tehtavien-tekeminen-ja-palautus.html" | prepend: site.baseurl }}) osioon.