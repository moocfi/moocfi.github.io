$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 500, 'swing', function () {
	        window.location.hash = target;
	    });
	});
	
	var menuButton = $('#menu_toggle');
	menuButton.click(function() {
		menuButton.toggleClass('active');
		$('body > nav').toggleClass('active');
	});

	$('#outdated-browser-close').click(function(){
		$('#outdated-browser').toggle();
			document.cookie="closed_old_browser_dialog=1";
	});
});

var equalheight = function(container) {

	$('> .description', container).height('auto');

	var rows = {};
	var items = $(container);
	items.each(function() {
		var topPosition = $(this).position().top;
		if(rows[topPosition] === undefined) {
			rows[topPosition] = new Array();
		}
		rows[topPosition].push(this);
	});
	for (var row in rows) {
		var rowMaxHeight = 0;
		for (var i = 0; i < rows[row].length; i++) {
			var item = rows[row][i];
			if($(item).height() > rowMaxHeight) {
				rowMaxHeight = $(item).height();
			}
		}
		for (var i = 0; i < rows[row].length; i++) {
			var item = rows[row][i];
			var section = $('> .description', item);
			section.height(
				// The body text is increased by however much the 
				// total element height differs from the tallest element on the row.
				section.height() + rowMaxHeight - $(item).height()
			);
		}
	}
}

$(window).load(function() {
	equalheight('.item:visible');
});
$(window).resize(function(){
	equalheight('.item:visible');
});

var old_browser_cookie = document.cookie.replace(/(?:(?:^|.*;\s*)closed_old_browser_dialog\s*\=\s*([^;]*).*$)|^.*$/, "$1");
if (!Modernizr.flexbox && old_browser_cookie != 1) {
  $('#outdated-browser').toggle();
}
