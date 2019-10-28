'use strict'

/*
*regex check on form
*/
var formSubmit = document.getElementById('submit');

formSubmit.addEventListener('click',validate);

function validate(){
  var firstName = document.getElementById('firstName').value;
  var lastName = document.getElementById('lastName').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var firstNameRGEX = /^[a-zA-Z]*$/;
  var lastNameRGEX = /^[a-zA-Z]*$/;
  var emailRGEX = /[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  var passwordRGEX = /^[a-zA-Z0-9_]*$/;


  if (firstNameRGEX.test(firstName) == false){
    alert('fail first name');
  }else{
    alert ('success first name')
  }

  if (lastNameRGEX.test(lastName) == false){
    alert('fail last name');
  }else{
    alert('success last name')
  }

  if (emailRGEX.test(email) == false){
    alert('fail email');
  }else{
    alert('success email');
  }

  if (passwordRGEX.test(password) == false){
    alert ('fail password');
  }else{
    alert('success password');
  }
}
