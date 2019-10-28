'use strict'

/*
*check phone number
*/
var formSubmit = document.getElementById('submit');

formSubmit.addEventListener('click', validate);

function checkPhoneNumber(){
	var phoneNumber = document.getElementById('phoneNumber').value;
	var phoneNumberRGEX = /^(01|06|07)\d{8}$/;

/*
*return result
*/

	if (phoneNumberRGEX(phoneNumber) == true){
		alert('valid phone number');
	}else{
		alert('unvalid phone number');
	}
}