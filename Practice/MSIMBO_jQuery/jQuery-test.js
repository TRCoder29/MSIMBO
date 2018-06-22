console.log ("hello from js");
var h1 = document.

jQuery("p").css({
	color: 'blue'
})

jQuery(".p1".css({
	color: 'red'
}))

jQuery("h1").html("Changing html");

// $ is a shortcut for jQuery

$ ("h1").html("Changing html");

$("h1").append('append from jQuery');

$("body").append('<ul><li></li></ul>');

function init() {
	$('h1#heading').hide();
	$('h2#heading').hide();
	$ (".heading2").hide();
	$('p, span').css('color', 'red');
	$('ul#list li: first').css('color', 'red');
	$('ul#list li: last').css('color', 'green');
	$('ul#list li: even').css('background-color', 'yellow');
	$('ul#list li: odd').css('background-color', 'red');
	$('ul#list li: nth child (4)').css('list-style', 'none');
}
