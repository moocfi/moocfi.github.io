---
title: Ympäristön asentaminen &ndash; TMCBeans
layout: course
main-class: has-aside
sidenav: general/ohjeita
---

**Huom:** Tämä asennusohje olettaa että tietokoneellasi on asennettuna Java 8 -ohjelmistokehityspaketti (JDK). Mikäli et ole varma oletko asentanut kyseisen paketin tietokoneellesi, suosittelemme että siirryt [Netbeans &amp; Java](/courses/general/ohjelmointi/asentaminen/netbeans/) -asennusohjeeseen.

Ympäristön asentaminen tapahtuu eri tavalla eri käyttöjärjestelmillä. Valitse alta oma käyttöjärjestelmäsi:

<div class="actions">
	<a class="action" href="#windows">Windows</a>
	<a class="action" href="#macos">macOS</a>
	<a class="action" href="#linux">Linux</a>
</div>

# Windows

Lataa TMC-NetBeansin uusin versio [tästä](http://update.testmycode.net/installers/tmc-netbeans_mooc/tmc-netbeans_mooc_tmcbeans-windows.exe) ja suorita asennus. Asentaminen tapahtuu seuraamalla asennusohjelman tarjoamia ohjeita.

Mikäli asentaminen onnistui ongelmitta jatka [seuraavaan vaiheeseen](#seuraavaksi).

Jos asentaminen epäonnistui varmista että JDK on asennettuna ja yritä asentamista uudelleen. Mikäli asentaminen ei vieläkään onnistu voit kokeilla myös seuraavia ohjeita [NetBeansin ja TMC-liitännäisen asennus erikseen](/courses/general/ohjelmointi/asentaminen/netbeans/#windows).

# MacOS

Lataa TMC-NetBeansin uusin versio [tästä](http://update.testmycode.net/installers/tmc-netbeans_mooc/tmc-netbeans_mooc_tmcbeans-macosx.tgz).

Asentaminen tapahtuu purkamalla ladattu tiedosto ja suorittamalla pakkauksesta purettu "NetBeans with TMC Installer.app". Asennusohjelma (eli installer) asentaa TMC-Netbeansin koneelle. Tämän jälkeen se löytyy Applications-kansiosta nimellä tmcbeans.app.

**HUOM!** Mikäli sinulla on OS X -käyttöjärjestelmän versio *Mountain Lion*, voit joutua suorittamaan TMC Installer.app -ohjelman klikkaamalla sitä hiiren kakkospainikkeella (trackpadilla kahdella sormella) ja valitsemalla avautuvasta valikosta Open/Avaa.

Mikäli asentaminen onnistui ongelmitta jatka [seuraavaan vaiheeseen](#seuraavaksi).

Jos asentaminen epäonnistui varmista että JDK on asennettuna ja yritä asentamista uudelleen. Mikäli asentaminen ei vieläkään onnistu voit kokeilla myös seuraavia ohjeita [NetBeansin ja TMC-liitännäisen asennus erikseen](/courses/general/ohjelmointi/asentaminen/netbeans/#macos).

# Linux

Lataa TMC-NetBeansin uusin versio [tästä](http://update.testmycode.net/installers/tmc-netbeans_mooc/tmc-netbeans_mooc_tmcbeans-linux.sh) ja suorita asennus.

Linuxissa asentaminen tapahtuu suorittamalla ladattu asennustiedosto antamalla sen sijaintihakemistossa komento

```
sudo ./tmc-netbeans_mooc_tmcbeans-linux.sh
```

Jotta suoritus onnistuu, on tiedostolle annettava suoritusoikeus komennolla

```
chmod o+x tmc-netbeans_mooc_tmcbeans-linux.sh
```

Mikäli asentaminen onnistui ongelmitta jatka [seuraavaan vaiheeseen](#seuraavaksi).

Jos asentaminen epäonnistui varmista että JDK on asennettuna ja yritä asentamista uudelleen. Mikäli asentaminen ei vieläkään onnistu voit kokeilla myös seuraavia ohjeita [NetBeansin ja TMC-liitännäisen asennus erikseen](/courses/general/ohjelmointi/asentaminen/netbeans/#linux).

# Seuraavaksi

Onnistuneen asennuksen jälkeen, siirry luomaan itsellesi käyttäjätunnusta TestMyCode -tarkistusjärjestelmäämme.

Mikäli olet jo aiemmin luonut käyttäjätunnuksen esimerkiksi jotain toista kurssiamme varten, voit käyttää sitä ja siirtyä takaisin kurssille.

<div class="actions">
	<a class="action" href="/courses/general/ohjelmointi/rekisteroityminen/">Siirry luomaan tunnuksia</a>
</div>
