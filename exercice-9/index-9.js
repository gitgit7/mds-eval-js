'use strict';

/**
 * @param {String} str 
 */
var checkPalindrome = function (str) {
    var strtmp = str.toLowerCase().replace(/ /gi, '');
    var reverseString = strtmp.split('').reverse().join('');
	return(strtmp === reverseString)
}


// prendre en compte les caractères spéciaux et les ponctuations, y compris les accents.

// ascii 
// a: 97, z: 122, A: 65, Z: 90

// à finir








// demon service dedier a la repetition des taches
