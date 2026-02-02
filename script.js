let player1turn;
let roundStartBTN = document.querySelector('#startRoundBTN')
roundStartBTN.addEventListener('click', () => {
    startRound("RoundNumber1");
    restartGame();
});
let gameboardArea = document.querySelector('#gameboardArea');
let endGame;
let gameResults;

let game = {
    gameboard: ["square1", "square2", "square3", "square4", "square5", "square6", "square7", "square8", "square9"],
}

let player1 = {
    points: 0,
    selectedMarker: "",
}

function startRound(roundNum){
    player1.selectedMarker = prompt("What is player 1s symbol (X/O) ?");
    roundNum = gameLogic();
    roundNum.determinePlayerMarker(player1, player2);
    createGameBoard(roundNum);
    player1turn = true;
}

let player2 = {
    points: 0,
    selectedMarker: "",
}

function gameLogic() {
    const detectWin = (gameboard, symbol, player) => {
        //----------------rows
        if (gameboard[0] === symbol && gameboard[1] === symbol && gameboard[2] === symbol){
            //across row #1
            player.points++;
            endGame = true;
        }else if (gameboard[3] === symbol && gameboard[4] === symbol && gameboard[5] === symbol){
            //across row #2
            player.points++;
            endGame = true; // <________________RESUME-
        }else if (gameboard[6] === symbol && gameboard[7] === symbol && gameboard[8] === symbol){
            //across row #3
            player.points++;
            endGame = true;
        }
        //-----------------columns
        else if (gameboard[0] === symbol && gameboard[3] === symbol && gameboard[6] === symbol){
            //top to bottom column #1
            player.points++;
            endGame = true;
        }else if (gameboard[1] === symbol && gameboard[4] === symbol && gameboard[7] === symbol){
            //top to bottom column #2
            player.points++;
            endGame = true;
        }else if (gameboard[2] === symbol && gameboard[5] === symbol && gameboard[8] === symbol){
            //top to bottom column #3
            player.points++;
            endGame = true;
        }
        //------------------diagonal
        else if (gameboard[0] === symbol && gameboard[4] === symbol && gameboard[8] === symbol){
            //diagonal top sqare to bottom square
            player.points++;
            endGame = true;
        }else if (gameboard[6] === symbol && gameboard[4] === symbol && gameboard[2] === symbol){
            //diagonal bottom sqare to top square
            player.points++;
            endGame = true;
        }else{
            return;
        }
    }
    const addMarkerToBoard = (location, symbol) => {
        location.textContent = symbol;
    }
    const determinePlayerMarker = (player1, player2) => {
        if (player1.selectedMarker === "O"){
           player2.selectedMarker = "X";
        }else if (player1.selectedMarker === "X"){
           player2.selectedMarker = "O";
        }else{
            alert('🔴 ERROR: In function determinePlayerMaker 🔴');
        }
    }
    return {detectWin, addMarkerToBoard, determinePlayerMarker}
}

function updateScoreBoard(){
    let player1pointsCounter = document.querySelector('strong:nth-of-type(1)');
    let player2pointsCounter = document.querySelector('strong:nth-of-type(2)');

}


function restartGame(){
    player1.points = 0;
    player2.points = 0;
    game.gameboard = ["square1", "square2", "square3", "square4", "square5", "square6", "square7", "square8", "square9"];
    gameboardArea.replaceChildren();

}

// function clearBoard(board){
//     board.forEach(element => {
//         element = "";
//     });
// }

function isGameDone(){
    if (game.gameboard[0] !== "square1" && game.gameboard[1] !== "square2" && game.gameboard[2] !== "square3" && game.gameboard[3] !== "square4" && game.gameboard[4] !== "square5" && game.gameboard[5] !== "square6" && game.gameboard[6] !== "square7" && game.gameboard[7] !== "square8" && game.gameboard[8] !== "square9"){
        gameResults = "tie";
        return true;
    }else if(endGame === true){
        if (player1.points > player2.points){
            gameResults = "Player 1 Won!"
        }else if (player1.points < player2.points){
            gameResults = "Player 2 Won!"
        }else{
            gameResults = "NO ONE WON! -- ERROR: function isGameDone() if/else statement nested inside main if/else statement"
        }
        return true;
    }else{
        return false;
    }
}

function alertWinnerIfGamesDone(){
    if (isGameDone() === true){
        alert(gameResults);
    }
}

function createGameBoard(roundNumber){
    let ticTacToeBoard = document.createElement('div');
    gameboardArea.appendChild(ticTacToeBoard);
    ticTacToeBoard.style.width ='303px';
    ticTacToeBoard.style.height = '303px';
    ticTacToeBoard.style.backgroundColor = 'blue';
    ticTacToeBoard.style.display = 'flex';
    ticTacToeBoard.style.flexWrap = 'wrap';
    ticTacToeBoard.style.gap = '1px';

    //------------ROW 1-----------------------
    let square1 = document.createElement('div');
    ticTacToeBoard.appendChild(square1);
    square1.style.width ='100px';
    square1.style.height = '100px';
    square1.style.backgroundColor = 'green';
    let square1filled = false;

    square1.addEventListener('click', () => {
        if (square1filled === false){
            if (player1turn === true){
                game.gameboard[0] = player1.selectedMarker;
                square1.textContent = player1.selectedMarker;
                player1turn = false;
                square1filled = true;
            }else{
                game.gameboard[0] = player2.selectedMarker;
                square1.textContent = player2.selectedMarker;
                player1turn = true;
                square1filled = true;
            }
            roundNumber.detectWin(game.gameboard, player1.selectedMarker, player1);
            roundNumber.detectWin(game.gameboard, player2.selectedMarker, player2);
            alertWinnerIfGamesDone();
        }
    })

    let square2 = document.createElement('div');
    ticTacToeBoard.appendChild(square2);
    square2.style.width ='100px';
    square2.style.height = '100px';
    square2.style.backgroundColor = 'green';
    let square2filled = false;

    square2.addEventListener('click', () => {
        if (square2filled === false){
            if (player1turn === true){
                game.gameboard[1] = player1.selectedMarker;
                square2.textContent = player1.selectedMarker;
                player1turn = false;
                square2filled = true;
            }else{
                game.gameboard[1] = player2.selectedMarker;
                square2.textContent = player2.selectedMarker;
                player1turn = true;
                square2filled = true;
            }
            roundNumber.detectWin(game.gameboard, player1.selectedMarker, player1);
            roundNumber.detectWin(game.gameboard, player2.selectedMarker, player2);
            alertWinnerIfGamesDone();
        }
    })

    let square3 = document.createElement('div');
    ticTacToeBoard.appendChild(square3);
    square3.style.width ='100px';
    square3.style.height = '100px';
    square3.style.backgroundColor = 'green';
    let square3filled = false;

    square3.addEventListener('click', () => {
        if (square3filled === false){
            if (player1turn === true){
                game.gameboard[2] = player1.selectedMarker;
                square3.textContent = player1.selectedMarker;
                player1turn = false;
                square3filled = true;
            }else{
                game.gameboard[2] = player2.selectedMarker;
                square3.textContent = player2.selectedMarker;
                player1turn = true;
                square3filled = true;
            }
            roundNumber.detectWin(game.gameboard, player1.selectedMarker, player1);
            roundNumber.detectWin(game.gameboard, player2.selectedMarker, player2);
            alertWinnerIfGamesDone();
        }
    })

    //------------ROW 2-----------------------
    let square4 = document.createElement('div');
    ticTacToeBoard.appendChild(square4);
    square4.style.width ='100px';
    square4.style.height = '100px';
    square4.style.backgroundColor = 'green';
    let square4filled = false;


    square4.addEventListener('click', () => {
        if (square4filled === false){
            if (player1turn === true){
                game.gameboard[3] = player1.selectedMarker;
                square4.textContent = player1.selectedMarker;
                player1turn = false;
                square4filled = true;
            }else{
                game.gameboard[3] = player2.selectedMarker;
                square4.textContent = player2.selectedMarker;
                player1turn = true;
                square4filled = true;
        }
            roundNumber.detectWin(game.gameboard, player1.selectedMarker, player1);
            roundNumber.detectWin(game.gameboard, player2.selectedMarker, player2);
            alertWinnerIfGamesDone();
        }
    })

    let square5 = document.createElement('div');
    ticTacToeBoard.appendChild(square5);
    square5.style.width ='100px';
    square5.style.height = '100px';
    square5.style.backgroundColor = 'green';
    let square5filled = false;

    square5.addEventListener('click', () => {
        if (square5filled === false){
            if (player1turn === true){
                game.gameboard[4] = player1.selectedMarker;
                square5.textContent = player1.selectedMarker;
                player1turn = false;
                square5filled = true;
            }else{
                game.gameboard[4] = player2.selectedMarker;
                square5.textContent = player2.selectedMarker;
                player1turn = true;
                square5filled = true;
        }
            roundNumber.detectWin(game.gameboard, player1.selectedMarker, player1);
            roundNumber.detectWin(game.gameboard, player2.selectedMarker, player2);
            alertWinnerIfGamesDone();
        }
    })

    let square6 = document.createElement('div');
    ticTacToeBoard.appendChild(square6);
    square6.style.width ='100px';
    square6.style.height = '100px';
    square6.style.backgroundColor = 'green';
    let square6filled = false;

    square6.addEventListener('click', () => {
        if (square6filled === false){
            if (player1turn === true){
                game.gameboard[5] = player1.selectedMarker;
                square6.textContent = player1.selectedMarker;
                player1turn = false;
                square6filled = true;
            }else{
                game.gameboard[5] = player2.selectedMarker;
                square6.textContent = player2.selectedMarker;
                player1turn = true;
                square6filled = true;
            }
            roundNumber.detectWin(game.gameboard, player1.selectedMarker, player1);
            roundNumber.detectWin(game.gameboard, player2.selectedMarker, player2);
            alertWinnerIfGamesDone();
        }
    })

    //------------ROW 3-----------------------
    let square7 = document.createElement('div');
    ticTacToeBoard.appendChild(square7);
    square7.style.width ='100px';
    square7.style.height = '100px';
    square7.style.backgroundColor = 'green';
    let square7filled = false;

    square7.addEventListener('click', () => {
        if (square7filled === false){
            if (player1turn === true){
                game.gameboard[6] = player1.selectedMarker;
                square7.textContent = player1.selectedMarker;
                player1turn = false;
                square7filled = true;
            }else{
                game.gameboard[6] = player2.selectedMarker;
                square7.textContent = player2.selectedMarker;
                player1turn = true;
                square7filled = true;
            }
            roundNumber.detectWin(game.gameboard, player1.selectedMarker, player1);
            roundNumber.detectWin(game.gameboard, player2.selectedMarker, player2);
            alertWinnerIfGamesDone();
        }
    })

    let square8 = document.createElement('div');
    ticTacToeBoard.appendChild(square8);
    square8.style.width ='100px';
    square8.style.height = '100px';
    square8.style.backgroundColor = 'green';
    let square8filled = false;

    square8.addEventListener('click', () => {
        if (square8filled === false){
            if (player1turn === true){
                game.gameboard[7] = player1.selectedMarker;
                square8.textContent = player1.selectedMarker;
                player1turn = false;
                square8filled = true;
            }else{
                game.gameboard[7] = player2.selectedMarker;
                square8.textContent = player2.selectedMarker;
                player1turn = true;
                square8filled = true;
            }
            roundNumber.detectWin(game.gameboard, player1.selectedMarker, player1);
            roundNumber.detectWin(game.gameboard, player2.selectedMarker, player2);
            alertWinnerIfGamesDone();
        }
    })

    let square9 = document.createElement('div');
    ticTacToeBoard.appendChild(square9);
    square9.style.width ='100px';
    square9.style.height = '100px';
    square9.style.backgroundColor = 'green';
    let square9filled = false;

    square9.addEventListener('click', () => {
        if (square9filled === false){
            if (player1turn === true){
                game.gameboard[8] = player1.selectedMarker;
                square9.textContent = player1.selectedMarker;
                player1turn = false;
                square9filled = true;
            }else{
                game.gameboard[8] = player2.selectedMarker;
                square9.textContent = player2.selectedMarker;
                player1turn = true;
                square9filled = true;
            }
            roundNumber.detectWin(game.gameboard, player1.selectedMarker, player1);
            roundNumber.detectWin(game.gameboard, player2.selectedMarker, player2);
            alertWinnerIfGamesDone();
        }
    })
}