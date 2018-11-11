'use strict';

/**
 * Class drawBar
 * @constructor
 */
var drawBar = function (sum,nbr) {        
   this.sum = sum; // sum: somme totale du nombre
   this.nbr = nbr; // nbr: pour la progression
}

drawBar.prototype.percent = function () {
    return ((this.nbr/this.sum)*100);
}

drawBar.prototype.draw = function() {
   if(!document.getElementById("1")) { // si ma barre n'existe pas 
      var myBar = document.createElement("div");
      myBar.setAttribute("id", "1");
                
      var myProgressBar = document.createElement("div");
      myProgressBar.setAttribute("id", "2");
      myBar.appendChild(myProgressBar);

      myProgressBar.style.width = this.nbr +'px';
      myProgressBar.style.height = '30px';
      myProgressBar.style.backgroundColor = '#2ecc71';  // barre vert8
      document.body.appendChild(myBar);
      myProgressBar.innerHTML = this.percent()+" %";
   }
   myBar.style.width = this.sum + 'px';
   myBar.style.height = '30px';
   myBar.style.border = 'solid';
   myBar.style.backgroundColor = '#f2f2f1';        // barre grise
}

//j'instancie une barre
var bar = new drawBar(300,178);

bar.draw();