var $button = $('button').not($('.special'));
var $numButton = $('.num');
var $placeHolder = $('#result')[0];
var $clearButton = $('#clear');
var $equalButton = $('#equal');
var $hint = $('.hint');
var $calcButton = $('.calc-op');

//check the number of decimal points
function checkPointCount(){
	var pointCount = $placeHolder.innerHTML.split('.').length-1;
	if (pointCount > 1) {
		$hint[0].innerHTML = "Oops, you enterd more than one decimal point!";
		$hint.show();
	} else {
		$hint.hide();
	}
}

// function clearWindow(){
// 	$placeHolder.innerHTML = "";
// }

function add(num1,num2){
	return num1 + num2;
}
function minus(num1, num2){
	return num1 - num2;
}
function multiply (num1,num2) {
	return num1 * num2;
}
function divide (num1,num2) {
	return num1 / num2;
}

function calculator(num1, num2, op){
	var operator = op.attr('value');
	if (operator === '+') {
		add();
	} else if (operator === '-') {
		minus();
	} else if (operator === 'x') {
		multiply();
	} else if (operator === '/') {
		divide();
	}
	console.log(operator);
}

$hint.hide();

//input a number to the result window
$numButton.click(function(event) {
	$placeHolder.innerHTML += ($(this).attr('value'));
});

//Check the number of decimal points each time a button is clicked
$button.click(function(event) {
	checkPointCount();
});

//Clear the last character in the result window when CE button is clicked
$clearButton.click(function(event) {
	var length = $placeHolder.innerHTML.length;
	$placeHolder.innerHTML = $placeHolder.innerHTML.slice(0,length-1);
	checkPointCount();
});

$calcButton.click(function(event) {
	var num1 = parseFloat($placeHolder.innerHTML);
	console.log(num1);
	var num2;
	$(this).blur(function(event) {
		clearWindow();
	});
});

$equalButton.click(function(event) {
	
});
