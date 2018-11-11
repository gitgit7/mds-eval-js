'use strict';

var notes = ['10', '13', '12', '15', '12', '11', '16', '14'];

var computeNote = function (notes) {
    var buffer = 0;

    notes.forEach(function (elements) {
        var parsed = parseInt(elements);
        buffer += parsed;
    });

    var moyenne = (buffer / notes.length);
    console.log(moyenne);
}

computeNote(notes);

