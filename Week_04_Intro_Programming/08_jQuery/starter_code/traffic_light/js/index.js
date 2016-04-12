//Implement the red light using jQuery. Don't forget to add the script tags.

$(document).ready(function(){

var stopButtonId = '#stopButton';

$('#stopButton').click(colorStopLight);
$('#slowButton').click(colorSlowLight);
$('#goButton').click(colorGoLight);

function colorStopLight() {
	$('#stopLight').css('backgroundColor', 'red');
	$('#slowLight, #goLight').css('backgroundColor', 'black');
	
}

function colorSlowLight() {
	$('#slowLight').css('backgroundColor', 'yellow');
	$('#stopLight, #goLight').css('backgroundColor', 'black');
}

function colorGoLight() {
	$('#goLight').css('backgroundColor', 'green');
	$('#stopLight, #slowLight').css('backgroundColor', 'black');
}

});