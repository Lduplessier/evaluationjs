'use strict'

var map = [[0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0],
            [0, 3, 3, 3, 3, 0, 0, 0, 0, 0, 4, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];

var counter1 = 0;
var counter2 = 0;
var counter3 = 0;
var counter4 = 0;
var counter5 = 0;
var gameOn = true;

function generateGrid(){
    for (var x = 0; tr <= 2; x++) {

        //write tr
        var elTr = document.createElement('tr');

        for(var y = 0; td <= 2; y++){

            //write td
            var elTd = document.createElement('td');

            elTd.setAttributes('id', this.Map[y][x]);

            elTd.style.borderWidth = '1px';
            elTd.style.borderColor = 'black';
            elTd.style.color = 'white';

        };
    }
}