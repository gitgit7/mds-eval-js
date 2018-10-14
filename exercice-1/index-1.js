'use strict';

var gridGenerator = function (xAxis, yAxis) {
	var tab = document.createElement('table');
	document.body.appendChild(tab);
		
	for (var x = 0; x < xAxis; x++) {
		var tr = document.createElement('tr');
		tab.appendChild(tr);	
		
		for (var y = 0; y < yAxis; y++) {
			var td = document.createElement('td');
			tr.appendChild(td);
			td.innerHTML = "X";
		}
	}	
}
