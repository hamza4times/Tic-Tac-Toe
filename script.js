//Create an object , add an array that stores the game board [square1, etc] inside the object
let game = {
    gameboard: [square1, square2, square3, square4, square5, square6, square7, square8, square9],
}
//Create an object for player1, with a variable points in it, player type (X/O) called selectedMarker
let player1 = {
    points: 0,
    selectedMarker: "",
}
//Create an object for Player2, with a variable points in it, player type (X/O) called selectedMarker
let player2 = {
    points: 0,
    selectedMarker: "",
}
/*Create a function called determinePlayerMarker that prompts the user to choose player 1 (X/O)
    if player 1.selectedMarker === "O", player2.selectedMarker = "X",
    else if player 1.selectedMarker === "X", player2.selectedMarker = "O"
    else alert an error with info abt function*/
function determinePlayerMarker(player1, player2){
    if (player1.selectedMarker === "O"){
        player2.selectedMarker = "X";
    }else if (player1.selectedMarker === "X"){
        player2.selectedMarker = "O";
    }else{
        alert('🔴 ERROR: In function determinePlayerMaker 🔴');
    }
}
//Create a factorory function with all of the game logic, and call the function when needed
function gameLogic(){

}
/*Create another function called addMarkerToBoard (location, symbol):
    gameboard.array[location] = symbol;*/
/*Create another function called detectWin(gameboard, symbol, player):
    if (gameboard.array[1] === symbol && gameboard.array[2] === symbol && gameboard.array[3] === symbol):
        player.point++;
    else if (etc (ever way to win))*/
function detectWin(gameboard, symbol, player){
    //----------------rows
    if (gameboard[0] === symbol && gameboard[1] === symbol && gameboard[2] === symbol){
        //across row #1
        player.points++;
    }else if (gameboard[3] === symbol && gameboard[4] === symbol && gameboard[5] === symbol){
        //across row #2
        player.points++;
    }else if (gameboard[6] === symbol && gameboard[7] === symbol && gameboard[8] === symbol){
        //across row #3
        player.points++;
    }
    //-----------------columns
    else if (gameboard[0] === symbol && gameboard[3] === symbol && gameboard[6] === symbol){
        //top to bottom column #1
        player.points++;
    }else if (gameboard[1] === symbol && gameboard[4] === symbol && gameboard[7] === symbol){
        //top to bottom column #2
        player.points++;
    }else if (gameboard[2] === symbol && gameboard[5] === symbol && gameboard[8] === symbol){
        //top to bottom column #3
        player.points++;
    }
    //------------------diagonal
    else if (gameboard[0] === symbol && gameboard[4] === symbol && gameboard[8] === symbol){
        //diagonal top sqare to bottom square
        player.points++;
    }else if (gameboard[6] === symbol && gameboard[4] === symbol && gameboard[2] === symbol){
        //diagonal bottom sqare to top square
        player.points++;
    }else{
        return;
    }


}


//Create a function that restarts the players pointss and create a function that clears the board
function clearPoints(player1, player2){
    player1.points = 0;
    player2.points = 0;
}

function clearBoard(board){
    board.forEach(element => {
        element = "";
    });
}
