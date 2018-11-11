'use strict';

function colorGenerator() {
	var color = '#';
  var HexArray = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 
		'A', 'B', 'C', 'D', 'E', 'F'
	];

	for (var i = 0; i < 6; i++) {
		color += HexArray[Math.floor(Math.random() * 16)] // Color Generator
	}
	return color;
}

/**
 * Genere une matrice de couleur aleatoire 
 * @param {Number} xAxis 
 * @param {Number} yAxis 
 */
 function gridGenerator(xAxis, yAxis) { 
	var ifTabExist = document.getElementsByTagName('table');

	if (ifTabExist[0] === undefined) { 
		var tab = document.createElement('table');
		document.body.appendChild(tab);
	
		for (var x = 0; x < xAxis; x++) {
			var tr = document.createElement('tr'); // Row
			tab.appendChild(tr);
	
			for (var y = 0; y < yAxis; y++) {
				var td = document.createElement('td'); // Column8
				tr.appendChild(td);
				var divColor = document.createElement('div');
				td.appendChild(divColor);
				divColor.style.width = '50px';
				divColor.style.height = '50px';
				divColor.style.backgroundColor = colorGenerator();
			}
		}
	}

	if (ifTabExist[0] !== undefined) { // Si le premier element existe deja 
		var getDivColor = document.getElementsByTagName('div');
		
		for (var i = 0; i <  getDivColor.length; ++i) {
			getDivColor[i].style.backgroundColor = colorGenerator();
		}
	}
}

setInterval(function () {
	gridGenerator(25, 25);
}, 1000);
