---
title: Tulostaulu
layout: course
resources:
  script:
    - 
      "window.addEventListener('message', function(event) {
        document.getElementById('pistelista-iframe').style.height = event.data + 'px';
      }, false);"
---

<p>Tarkemmat tiedot palautetuista tehtävistä ja puuttuvista pisteistä löydät <a href="https://tmc.mooc.fi/mooc">TMC:stä</a> kirjautumalla sisään ja valitsemalla ylävalikosta My Stats. Tarkemmat tiedot selitystehtävistä saamistasi pisteistä löydät <a href="selitystehtavat.html">täältä</a>.</p>

<iframe id="pistelista-iframe" src="http://www.cs.helsinki.fi/group/java/mooc-tulokset/" style="width:100%;height:500px;border:0px;"></iframe>
