'use strict';

var checkPalindrome = function (str) {
    var filter = str.toLowerCase().replace(/ /gi, '');
    var reverseString = filter.split('').reverse().join('');

    console.log("filter: " + filter);
    console.log("reverseString: " + reverseString);

    if (filter === reverseString) 
        return true;
    else
        return false; 

    console.log(' ----------------------------------------------------- ');
}

checkPalindrome('LA MALADE pedala mal');
checkPalindrome('Et la marine va venir à Malte');
checkPalindrome("À l'étape, épate-la ! ");

// prendre en compte les caractères spéciaux et les ponctuations, y compris les accents.

// ascii 
// a: 97, z: 122, A: 65, Z: 90

// à finir








// demon service dedier a la repetition des taches