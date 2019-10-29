'use strict'

class Morpion {
    constructor(player_turn, playerX, playerO, turn, playerO_score, playerX_Score){
        this.player_turn = true;
        this.playerX = 'X';
        this.playerO = 'O';
        this.turn = turn;
        this.playerX_Score = 0;
        this.playerO_score = 0;
        this.map = [['','',''],
                    ['','',''],
                    ['','','']]; 
    }

   /* var player_turn = true;
    var playerX = 'X';
    var playerO = 'O';
    var turn;
    var playerX_Score = 0;
    var playerO_score = 0;
    
    var map = [['','',''],
               ['','',''],
               ['','','']];
    */

    turnSymbol(){
        if (player_turn == true){
            turn = playerO;
            player_turn = false;
        }else if (player_turn == false){
            turn = playerX;
            player_turn = true;
        }
    }


    addSymbol(){
        case.addEventListener('click',turnSymbol);
        if (map[y][x] =! ''){
            alert('already taken');
        }else{
            map[y][x] = this.turn;
        }
    }

    checkWin(){
        if(map[1][1] == map[2][1] == map[3][1] || map[1][2] == map[2][2] == map[3][2] || map[1][3] == map[2][3] == map[3][3] || map[1][1] == map[1][2] == map[1][3] || map[2][1] == map[2][2] == map[2][3] || map[3][1] == map[3][2] == map[3][3] || map[1][1] == map[2][2] == map[3][3] || map[3][1] == map[2][2] == map[1][3]){
            return true;
            alert('point pour ' + this.turn);
            if(turn == 'X'){
                playerX_Score++;
            }else if(turn == 'O'){
                playerO_score++;
            };
        }
        restartGame;
    }

    function checkTie(){
        if(map[1][1] && map[2][1] && map[3][1] && map[1][2] && map[2][2] && map[3][2] && map[1][3] && map[2][3] && map[3][3] =! '' && checkWin == false){
            alert('tie game');
            restartGame;
        }
    }

    function restartGame(){
        this.map = [['','',''],
                    ['','',''],
                    ['','','']];
    }
}