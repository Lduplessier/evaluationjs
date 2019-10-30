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

var alive1 = true;
var alive2 = true; 
var alive3 = true; 
var alive4 = true; 
var alive5 = true; 

var gameOn = true;

var show_Boat1 = document.getElementById('boat1');
var show_Boat2 = document.getElementById('boat2');
var show_Boat3 = document.getElementById('boat3');
var show_Boat4 = document.getElementById('boat4');
var show_Boat5 = document.getElementById('boat5');


function generateGrid(){
    var elBody = document.querySelector('body');
    var elTable = document.createElement('table');

    elTable.style.height = '500px';
    elTable.style.width = '500px';
    elTable.style.border = 'black';
    elTable.style.borderWidth = '5px';
    elTable.style.borderStyle = 'solid';
    for (var x = 0; x <= 11; x++) {

        //write tr
        var elTr = document.createElement('tr');

        for(var y = 0; y <= 11; y++){
            //write td
            var elTd = document.createElement('td');

            //calling hitboat
            elTd.addEventListener('click', hitBoat(), false);

            //setting id for td
            elTd.setAttribute('id', map[y][x]);

            //css td
            elTd.style.borderWidth = '1px';
            elTd.style.borderStyle = 'solid';
            elTd.style.borderColor = 'white';
            elTd.style.backgroundColor = 'black';
            elTd.style.color = 'white';
            elTd.style.height = '15px';
            elTd.style.width = '15px';
            
            //appendchild td
            elTr.appendChild(elTd);
        }

        //appendchild tr
        elTable.appendChild(elTr);
    }
    elBody.appendChild(elTable);
}



//checking the id of the tr
function hitBoat(){
    console.log('hejkzf');
    if(document.getElementById('0')){
        console.log('test0');
        elTd.style.backgroundColor = 'blue';
    }else if (document.getElementById('1')){
        elTd.style.backgroundColor = 'red';
        alert('hit');
        counter1++;
    }else if (document.getElementById('2')){
        elTd.style.backgroundColor = 'red';
        alert('hit');
        counter2++;
    }else if (document.getElementById('3')){
        elTd.style.backgroundColor = 'red';
        alert('hit');
        counter3++;
    }else if (document.getElementById('4')){
        elTd.style.backgroundColor = 'red';
        alert('hit');
        counter4++;
    }else if (document.getElementById('5')){
        elTd.style.backgroundColor = 'red';
        alert('hit');
        counter5++;
    }
}


//checking if all hunter tr are hit
function ripBoat1(){
    if (counter1 == 2){
        show_Boat1.innerText = 'Hunter Destroyed'
        show_Boat1.style.color = 'red';
        alive1 = false;
        alert ('Hunter sink');
    }else{
        show_Boat1.innerText = 'Hunter';
        show_Boat1.style.color = 'black';
    }
}

//checking if all frigate tr are hit
function ripBoat2(){
    if (counter2 == 3){
        show_Boat2.innerText = 'Frigate Destroyed';
        show_Boat2.style.color = 'red';
        alive2 = false;
        alert('Frigate sink');
    }else{
        show_Boat2.innerText = 'Frigate';
        show_Boat2.style.color = 'black';
    }
}
//checking if all submarine tr are hit
function ripBoat3(){
    if (counter3 == 4){
        show_Boat3.innerText = 'Submarine Destroyed';
        show_Boat3.style.color = 'red';
        alive3 = false;
        alert('Submarine sink');
    }else{
        show_Boat3.innerText = 'Submarine';
        show_Boat3.style.color = 'black';
    }
}

//checking if all carrier 1 tr are hit
function ripBoat4(){
    if (counter4 == 2){
        show_Boat4.innerText = 'Carrier 1 Destroyed';
        show_Boat4.style.color = 'red';
        alive4 = false;
        alert('Carrier 1 sink');
    }else{
        show_Boat4.innerText = 'Carrier 1';
        show_Boat4.style.color = 'black';
    }
}

//checking if all carrier 2 tr are hit
function ripBoat5(){
    if (counter5 == 2){
        show_Boat5.innerText = 'Carrier 2 Destroyed';
        show_Boat5.style.color = 'red';
        alive5 = false;
        alert('Carrier 2 sink');
    }else{
        show_Boat5.innerText = 'Carrier 2';
        show_Boat5.style.color = 'black';
    }
}

//checking if all boat are destroyed
function endGame(){
    if (alive1 && alive2 && alive3 && alive4 && alive5 == false){
        alert('You win');
    }
}

generateGrid();