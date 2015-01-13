$(document).ready(function () {	
	$(".exercise header").each( function () {
		$(this).next().toggle();
	})
});

$(".exercise header").click( function () {
	$(this).next().slideToggle(500);
});