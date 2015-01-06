$(document).ready(function () {	
	var menuButton = $('#menu_toggle');

	menuButton.click(function () {
		menuButton.toggleClass('active');
		$('body > nav').toggleClass('active');
	});
});