'use strict'
var player_turn = true;
var playerX = 'X';
var playerO = 'O';
var turn = turn;
var playerX_Score = 0;
var playerO_score = 0;
var map = [['','',''],
           ['','',''],
           ['','','']]; 
var game = true;


var Morpion = 
    
    //lauching the game
    function gameOn(){
        var grid = document.getElementsByName('body');
        grid.addEventListener('load',generateGrid());


        elTd.addEventListener('click', addSymbol());
        
        while(this.game == true){
            //setting the turns
            function turnSymbol(){
                if (this.player_turn == true){
                    this.turn = playerO;
                    this.player_turn = false;
                }else if (this.player_turn == false){
                    this.turn = playerX;
                    this.player_turn = true;
                };
            };
           
            //generating the grid
            function generateGrid(){
                for (var x = 0; tr <= 2; x++) {
        
                    //write tr
                    var elTr = document.createElement('tr');
            
                    for(var y = 0; td <= 2; y++){
            
                        //write td
                        var elTd = document.createElement('td');

                        elTd.setAttributes('id', this.Map[y][x]);
                        
                        elTd.style.height = '30px';
                        elTd.style.width = '30px';
                        elTd.style.borderWidth = '5px';
                        elTd.style.borderColor = 'black';
                        elTd.style.fill = 'white';
                    
            
                    };
                };
            }

            //adding symbol to the case of the grid
            function addSymbol(){
                turnSymbol();
                if (this.map[y][x] =! ''){
                    alert('already taken');
                }else{
                    this.map[y][x] = this.turn;
                    elTd.innerText = turn;
                    checkTie();
                };
            };

            //checking winning situation
            function checkWin(){
                if(this.map[0][0] == this.map[1][0] == this.map[2][0] || this.map[0][1] == this.map[1][1] == this.map[2][1] || this.map[0][2] == this.map[1][2] == this.map[2][2] || this.map[0][0] == this.map[0][1] == this.map[0][2] || this.map[1][0] == this.map[1][1] == this.map[1][2] || this.map[2][0] == this.map[2][1] == this.map[2][2] || this.map[0][0] == this.map[1][1] == this.map[2][2] || this.map[2][0] == this.map[1][1] == this.map[0][2]){
                    alert('point pour ' + this.turn);
                    if(this.turn == 'X'){
                        this.playerX_Score++;
                        winGame();
                    }else if(this.turn == 'O'){
                        this.playerO_score++;
                        winGame();
                    };
                    return true;
                };
                restartGame();
            };

            //checking tie situation
            function checkTie(){
                if((this.map[0][0] && this.map[1][0] && this.map[2][0] && this.map[0][1] && this.map[1][1] && this.map[2][1] && this.map[0][2] && this.map[1][2] && this.map[2][2] != '') && checkWin() == false){
                    alert('tie game');
                    restartGame();
                };
            };

            //reseting the grid
            function restartGame(){
                this.map = [['','',''],
                            ['','',''],
                            ['','','']];
                
                var allTd =  document.querySelectorAll('td');
                allTd.innerText = '';
            };

            //point counter with stop to game if player has 3 point
            function winGame(){
                if(this.playerO_score == 3){
                    alert('Player O has won');
                    this.game = false;
                }else if(this.playerX_Score == 3){
                    alert('Player X has won');
                    this.game = false;
                }
            };
        }
    };