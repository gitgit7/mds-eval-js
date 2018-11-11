'use strict';

var checkPhoneNumber = function (number) {
  var regexPhone = /^(01|06|07)[0-9]{8}$/;

  var result = regexPhone.test(number);

    if (result == true) {
      return true;
    } 
  
    if (result == false) {
      return false;
    } 
}

checkPhoneNumber('0123456789');

