'use strict'

/*
*
*/

function checkPhoneNumber(){
	var phoneNumber = document.getElementById('phoneNumber').value;
	var phoneNumberRGEX = /^(01|06|07)+[1-9][0-9]{8}$/;
	var phoneNumberResult = phoneNumberRGEX.test(phoneNumber);


	if (phoneNumberResult == true){
		
	}else{

	}
}