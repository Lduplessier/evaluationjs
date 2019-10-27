'use strict'

/*
*check phone number
*/

function checkPhoneNumber(){
	var phoneNumber = document.getElementById('phoneNumber').value;
	var phoneNumberRGEX = /^(01|06|07)\ [1-9][0-9]{8}$/;
	var phoneNumberResult = phoneNumberRGEX.test(phoneNumber);


/*
*return result
*/

	if (phoneNumberResult == true){
		console.log('valid phone number')
	}else{
		console.log('unvalid phone number')
	}
}