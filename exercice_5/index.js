'use strict'


//calling the function
var formSubmit = document.getElementById('submit');
formSubmit.addEventListener('click',validate);

function validate(){
  //getting the value of the differents inputs
  var firstName = document.getElementById('firstName').value;
  var lastName = document.getElementById('lastName').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  //getting the result p
  var result_firstName = document.getElementById('result_firstName');
  var result_lastName = document.getElementById('result_lastName');
  var result_email = document.getElementById('result_email');
  var result_password = document.getElementById('result_password');

  //setting the differents regex
  var firstNameRGEX = /^[a-zA-Z]*$/;
  var lastNameRGEX = /^[a-zA-Z]*$/;
  var emailRGEX = /[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  var passwordRGEX = /^[a-zA-Z0-9_]*$/;

  // check first name
  if (firstNameRGEX.test(firstName) == false){
    result_firstName.innerText = 'Invalid first name';
    result_firstName.style.color = 'red';
  }else if(firstName == ''){
    result_firstName.innerText = 'Empty first name';
    result_firstName.style = 'red';
  }else{
    result_firstName.innerText = 'Valid first name';
    result_firstName.style.color = 'green';
  }

  //check last name
  if (lastNameRGEX.test(lastName) == false){
    result_lastName.innerText = 'Invalid last name';
    result_lastName.style.color = 'red';
  }else if(lastName == ''){
    result_lastName.innerText = 'Empty last name';
    result_lastName.style = 'red';
  }else{
    result_lastName.innerText = 'Valid last name';
    result_lastName.style.color = 'green';
  }

  //check email
  if (emailRGEX.test(email) == false){
    result_email.innerText = 'Invalid email';
    result_email.style.color = 'red';
  }else if(email == ''){
    result_email.innerText = 'Empty email';
    result_email.style = 'red';
  }else{
    result_email.innerText = 'Valid email';
    result_email.style.color = 'green';
  }

  //check password
  if (passwordRGEX.test(password) == false){
    result_password.innerText = 'Invalid password';
    result_password.style.color = 'red';
  }else if(password == ''){
    result_password.innerText = 'Empty password';
    result_password.style = 'red';
  }else{
    result_password.innerText = 'Valid password';
    result_password.style.color = 'green';
  }
}
