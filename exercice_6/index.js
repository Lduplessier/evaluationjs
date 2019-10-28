'use strict'

/*
*check phone number
*/
var submitNumber = document.getElementById('submit');

submitNumber.addEventListener('click', checkPhoneNumber);

function checkPhoneNumber(){
	var phoneNumber = document.getElementById('phoneNumber').value;
	var phoneNumberRGEX = /^(01|06|07)\d{8}$/;
/*
*return result
*/
	if (phoneNumberRGEX.test(phoneNumber) == true){
		alert('valid phone number');
	}else{
		alert('unvalid phone number');
	}
}