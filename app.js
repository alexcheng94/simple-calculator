var $button = $('button').not($('.special'));
var placeHolder = $('#result')[0];
var $clearButton = $('#clear');
var $equalButton = $('#equal');
var $hint = $('.hint');
var $acButton = $('#allClear');

//check the length of input
function checkNumberLength(){
	var numberLength = placeHolder.innerHTML.length;
	if (numberLength > 48) {
		$hint[0].innerHTML = "I can only show 48 digits D:";
		$hint.show();
	}
}

$hint.hide();

//input a number to the result window
$button.click(function() {
	placeHolder.innerHTML += this.value;
	checkNumberLength();
});

//Clear the last character in the result window when CE button is clicked
$clearButton.click(function() {
	var length = placeHolder.innerHTML.length;
	placeHolder.innerHTML = placeHolder.innerHTML.slice(0,length-1);
	$hint.hide();
});

//Clear all 
$acButton.click(function(event) {
	placeHolder.innerHTML = "";
	$hint.hide();
});

$equalButton.click(function() {
	try {
		result = eval(placeHolder.innerHTML);
		placeHolder.innerHTML = result;
	} catch(e) {
		$hint[0].innerHTML = "There's an error with your input, please try again.";
		$hint.show();
	}
});