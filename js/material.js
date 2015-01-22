$(document).ready(function () {	
	$(".exercise header").each( function () {
		$(this).next().toggle();
	})

	var menuButton = $('#week-selector-toggle');
	menuButton.click(function() {
		menuButton.toggleClass('active');
		$('#week-selector').toggleClass('active');
	});
});

$(".exercise header").click( function () {
	$("h1", this).toggleClass("open");
	$(this).next().slideToggle(500);
});