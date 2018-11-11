'use strict';

function checkPalindrome(str) {

  var strtmp = "";
  var strstr = str.toLowerCase(); // je prend en compte la sensibilite a la casse

  var i = 0;
  while (i < str.length) {
    if (strstr[i] >= 'a' && strstr[i] <= 'z') // Si le caractère correspond au lettre de l'alphabet
    {
      strtmp += str[i]; // Concaténe le caractère dans une string.
    }
    ++i;
  }

  return (strtmp.split('').reverse().join('') == strtmp); // retourne true si palindrome et false si ce n'est pas le cas.

}