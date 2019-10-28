'use strict'

var submitPalin = document.getElementById('submit');


function checkPalindrome(str){

	var string_test = str.split('');
	var str_invert = [];

	for (var i =0;  i <= string_test.length; i++){
		str_invert [i] = string_test [string_test.length-i-1];
	}
	alert(string_test);
	alert(str_invert);

	string_test = string_test.join('');
	str_invert = str_invert.join('');

	alert(string_test);
	alert(str_invert);

	if (string_test == str_invert) {
		alert(str + ' is a palindrome');
	}else{
		alert(str + ' is not a palindrome');
	}

}
checkPalindrome('kayak');