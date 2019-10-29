'use strict'

class Morpion {
    constructor(player_turn, turn, playerO_score, playerX_Score, map, game){
        this.player_turn = true;
        this.playerX = 'X';
        this.playerO = 'O';
        this.turn = turn;
        this.playerX_Score = 0;
        this.playerO_score = 0;
        this.map = [['','',''],
                    ['','',''],
                    ['','','']]; 
        this.game = true;
    }

    gameOn(){
        while(this.game == true){
            turnSymbol(){
                if (this.player_turn == true){
                    this.turn = playerO;
                    this.player_turn = false;
                }else if (this.player_turn == false){
                    this.turn = playerX;
                    this.player_turn = true;
                }
            };

            generateGrid(){
                for (var x = 1; tr <= 2; x++) {
        
                    //write tr
                    var elTr = document.createElement('tr');
            
                    for(var y = 0; td <= 2; y++){
            
                        //write td
                        var elTd = document.createElement('td');
            
                        elTd.setAttributes('id', this.Map[y][x]);
            
                        elTd.style.borderWidth = '1px';
                        elTd.style.borderColor = 'black';
                        elTd.style.color = 'white';
            
                    }
            }
            }

            addSymbol(){
                elTd.addEventListener('click',turnSymbol);
                if (this.map[y][x] =! ''){
                    alert('already taken');
                }else{
                    this.map[y][x] = this.turn;
                    elTd.innerText = turn;
                }
            };

            checkWin(){
                if(this.map[1][1] == this.map[2][1] == this.map[3][1] || this.map[1][2] == this.map[2][2] == this.map[3][2] || this.map[1][3] == this.map[2][3] == this.map[3][3] || this.map[1][1] == this.map[1][2] == this.map[1][3] || this.map[2][1] == this.map[2][2] == this.map[2][3] || this.map[3][1] == this.map[3][2] == this.map[3][3] || this.map[1][1] == this.map[2][2] == this.map[3][3] || this.map[3][1] == this.map[2][2] == this.map[1][3]){
                    alert('point pour ' + this.turn);
                    if(this.turn == 'X'){
                        this.playerX_Score++;
                    }else if(this.turn == 'O'){
                        this.playerO_score++;
                    };
                    return true;
                }
                restartGame();
            };

            checkTie(){
                if((this.map[1][1] && this.map[2][1] && this.map[3][1] && this.map[1][2] && this.map[2][2] && this.map[3][2] && this.map[1][3] && this.map[2][3] && this.map[3][3] != '') && checkWin() == false){
                    alert('tie game');
                    restartGame();
                }
            };

            restartGame(){
                this.map = [['','',''],
                            ['','',''],
                            ['','','']];
            };

            winGame(){
                if(this.playerO_score == 3){
                    alert('Player O has won');
                    this.game = false;
                }else if(this.playerX_Score == 3){
                    alert('Player X has won');
                    this.false = false;
                }
            };
        }
    }
}

Morpion.gameOn();