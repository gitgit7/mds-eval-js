'use strict';

function CheckAll() {
  var field_nom = document.getElementById("nom");
  var field_prenom = document.getElementById("prenom");
  var field_email = document.getElementById("email");
  var field_password = document.getElementById("password");

  var reg = /^[a-zA-Z ]+$/;
  var reg_email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var reg_pass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

  var res = reg.test(field_nom.value);
  var res2 = reg.test(field_prenom.value);
  var res3 = reg_email.test(field_email.value);
  var res4 = reg_pass.test(field_password.value);
  
  if (res == false) {
    alert("Pas un nom valide !");
  }

  if (res2 == false) {
    alert("Pas un prénom valide !");
  }

  if (res3 == false) {
    alert("Pas un email valide !");
  }

  if (res4 == false) {
    alert("Pas un password valide ! Le mot de passe doit avoir au moins un chiffre et 8 caracteres");
  }

  if (res && res2 && res3 && res4 === true) {
    alert("Felicitation vous avez creer votre compte");
  }

  return 0;
}