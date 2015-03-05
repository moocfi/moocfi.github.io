---
title: Selitystehtävät
layout: course
resources:
  script:
    - 
      "window.addEventListener('message', function(event) {
        document.getElementById('pistelista-iframe').style.height = event.data + 'px';
      }, false);"
---
<p>Vihreällä värillä on merkitty tehtävät joista olet saanut pisteet (2 pistettä per tehtävä). Punaisella värillä tehtävät joista et ole vielä saanut pistettä.</p>
<p>Pisteet ilmestyvät taulukkoon heti vastaamisen jälkeen. Mikäli pisteitä ei kuitenkaan näy, tarkista että olet kirjautunut materiaaliin täsmälleen samalla tunnuksella kuin millä rekisteröidyit TMC:hen (kirjainkoolla on merkitystä).</p>
<iframe id="pistelista-iframe" src="http://josalmi.users.cs.helsinki.fi/tmc/selitys.php" style="width:100%;height:500px;border:0px;"></iframe>
