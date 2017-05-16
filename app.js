var $button = $('button').not($('.special'));
var placeHolder = $('#result')[0];
var $clearButton = $('#clear');
var $equalButton = $('#equal');
var $hint = $('.hint');
var $calcButton = $('.calc-op');

//check the length of input
function checkPointCount(){
	var pointCount = placeHolder.innerHTML.split('.').length-1;
	if (pointCount > 1) {
		$hint[0].innerHTML = "Oops, you enterd more than one decimal point in a number!";
		return true;
	} else{
		return false;
	}
}
// check the number of decimal points
function checkNumberLength(){
	var numberLength = placeHolder.innerHTML.length;
	if (numberLength > 48) {
		$hint[0].innerHTML = "I can only show 48 digits D:";
		return true;
	} else{
		return false;
	}
}

function showHint(){
	if (checkPointCount() || checkNumberLength()) {
		$hint.show();
	}
}

function hideHint(){
	if (!checkPointCount() && !checkNumberLength()) {
		$hint.hide();
	}
}

$hint.hide();

//input a number to the result window
$button.click(function(event) {
	placeHolder.innerHTML += ($(this).attr('value'));
	showHint();
});

//Clear the last character in the result window when CE button is clicked
$clearButton.click(function(event) {
	var length = placeHolder.innerHTML.length;
	placeHolder.innerHTML = placeHolder.innerHTML.slice(0,length-1);
	hideHint();
});

$equalButton.click(function(event) {
	result = eval(placeHolder.innerHTML);
	placeHolder.innerHTML = result;
});