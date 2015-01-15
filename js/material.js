$(document).ready(function () {	
	$(".exercise header").each( function () {
		$(this).next().toggle();
	})
});

$(".exercise header").click( function () {
	$("h1", this).toggleClass("open");
	$(this).next().slideToggle(500);
});