---
title: Ohjeita kokeeseen
layout: course
main-class: has-aside
sidenav: general/ohjeita
---
**KOE TEHDÄÄN KOKONAAN PAPERILLE. TIETOKONEIDEN YMS. KÄYTTÖ ON KIELLETTY.**

Koe sisältää useita pieniä ohjelmointitehtäviä. Tehtävät ovat samantyyppisiä kuin mitä harjoitustehtävissä on harjoiteltu. Kokeessa ohjelmointi tehdään paperille.

Kokeen kannalta kurssin kaikki viikot ovat tärkeitä, ohjelmoinnin jatkokurssi on toki peruskurssia tärkeämmässä roolissa. **Graafisiin käyttöliittymiin liittyvää ohjelmointitehtävää kokeissa ei ole. Ohjelmointitehtäviä ei myöskään tule säännöllisistä lausekkeista.**

# Mitä ei tarvitse muistaa ulkoa?

Koepaperissa annetaan valmiiksi "pääohjelmarunko", eli sitä ei tarvitse osata ulkoa:

```java
import java.util.Scanner;

public class KoeOhjelma {
    
    public static void main(String[] args) {
        Scanner lukija = new Scanner(System.in);

        int luku = Integer.parseInt( lukija.nextLine() );        
        String merkkijono = lukija.nextLine();       
    }
}
```

Jos tehtävässä tarvitsee ArrayList-, HashMap- tai Random-luokkia, niiden metodien kuvaukset annetaan.

Ohjelmoinnin perusteiden viikolla 6 käsiteltyjä järjestämisalgoritmeja ja binäärihakua ei tarvitse kokeessa muistaa ulkoa.

Paperiohjelmoinnissa ollaan myös hiukan armollisempia esim. puolipisteiden ja muiden pienten unohdusten suhteen. Kannattaa kuitenkin muistaa että esimerkiksi lohkoilla ({}) on hyvin iso merkitys ohjelman suoritukseen.

Ohjelmat tulee myös sisentää hyvin.

Erityinen huomio kannattaa kokeeseen kertauksessa ohjelmointitehtäviä silmälläpitäen kiinnittää seuraaviin aiheisiin:

- Javan valmiit luokat: HashMap, ArrayList
- rajapinnat
- valmiit rajapinnat: Comparable, List, Map ym
- perintä, abstraktit luokat
- tiedoston lukeminen
- poikkeukset

# Termejä ja käsitteitä

Kokeessa on todennäköisesti myös termeihin ja käsitteistöön liittyvä kysymys. Kertaa materiaalia lukiessasi ainakin seuraavat käsitteet:

- muuttuja
- tyyppi
- lohko
- metodi
- parametri
- paluuarvo
- luokka
- olio
- oliomuuttuja (toiselta nimeltään olion kenttä tai olion attribuutti)
- konstruktori
- this
- metodin ja konstruktorin kuormittaminen
- toString
- staattisten ja ei-staattisten metodien erot
- alkeistyyppi/viittaustyyppi
- näkyvyys: public, private, protected, pakkausnäkyvyys
- rajapinta
- comparable
- periytyminen
- yläluokka-aliluokka
- super
- metodin korvaaminen
- abstrakti metodi
- abstrakti luokka
- polymorfismi
- kuormittaminen (ohjelmoinnin perusteissa)
- poikkeus
- graafisen käyttöliittymän sisältävät ohjelmien periaatteet (mistä käyttöliittymät koostuvat, tapahtumien käsittely)