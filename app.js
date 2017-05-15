var $button = $('button').not($('.special'));
var $placeHolder = $('#result')[0];
var $clearButton = $('#clear');

//input a number or a operator to the result window
$button.click(function(event) {
	$placeHolder.innerHTML += ($(this).attr('value'));
});

//Clear the last character in the result window when CE button is clicked
$clearButton.click(function(event) {
	var length = $placeHolder.innerHTML.length;
	$placeHolder.innerHTML = $placeHolder.innerHTML.slice(0,length-1);
});
