'use strict'

// getting the launch with the input button
var submitNumber = document.getElementById('submit');
submitNumber.addEventListener('click', checkPhoneNumber);



function checkPhoneNumber(){
	//getting the value of the input
	var phoneNumber = document.getElementById('phoneNumber').value;
	
	//checking if start of phone number is either 01,06 or 07
	//checking phone number with Regex
	var phoneNumberRGEX = /^(01|06|07)\d{8}$/;

	//checking if regex is respected and returning it's result
	if (phoneNumberRGEX.test(phoneNumber) == true){
		alert('valid phone number');
	}else{
		alert('unvalid phone number');
	}
}