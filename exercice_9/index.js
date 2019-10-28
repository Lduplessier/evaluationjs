'use strict'

function checkPalindrome(str){
	//string to array with str argument
	var string_test = str.split('');

	//creating the comparing variable
	var str_invert = [];

	//inverting the string_test into str_invert
	for (var i =0;  i <= string_test.length; i++){
		str_invert [i] = string_test [string_test.length-i-1];
	}

	//array to string with string_test and str_invert
	string_test = string_test.join('');
	str_invert = str_invert.join('');

	// checking if palindrome or not and returning an message with result
	if (string_test == str_invert) {
		alert(str + ' is a palindrome');
	}else{
		alert(str + ' is not a palindrome');
	}

}

//calling the function with the wanted test
checkPalindrome('kayak');