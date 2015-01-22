---
title: Tulostaulu
layout: course
---
<iframe id="pistelista-iframe" src="http://www.cs.helsinki.fi/group/java/mooc-tulokset/" style="width:100%;border:0px;"></iframe>

<script>
var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
var eventer = window[eventMethod];
var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";

// Listen to message from child window
eventer(messageEvent,function(e) {
    var key = e.message ? "message" : "data";
    var data = e[key];
    document.getElementById("pistelista-iframe").style.height = data + 'px';
},false);
</script>