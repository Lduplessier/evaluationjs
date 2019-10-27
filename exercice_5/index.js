'use strict'

/*
*regex check on form
*/
function validate(){
  var firstName = document.getElementById('firstName').value;
  var lastName = document.getElementById('lastName').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var firstNameRGEX = /^[a-zA-Z]$/;
  var lastNameRGEX = /^[a-zA-Z]$/;
  var emailRGEX = /^[a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)*\@[a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)*\.[a-zA-Z0-9_]{2.4}$/;
  var passwordRGEX = /^[a-zA-Z0-9_]$/;
  var firstNameResult = firstNameRGEX.test(firstName);
  var lastNameResult = lastNameRGEX.test(lastName);
  var emailResult = emailRGEX.test(email);
  var passwordResult = passwordRGEX.test(password);

/*
*show error
*/

  if (firstNameResult == false){
  	alert('unvalid first name');
  };

  if (lastNameResult == false){
  	alert('unvalid last name');
  };

  if (emailResult == false){
  	alert('unvalid email');
  };

  if (passwordResult == false){
  	alert('unvalid password');
  }
}