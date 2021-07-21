let container = document.querySelector('.container'); 

// Modules
let Titlescreen = (function() {
    let startMenu = document.createElement('div');
    startMenu.className = "startMenu"; 
    let startTitle = document.createElement('h1');
    startTitle.className = "startTitle"; 
    startTitle.innerHTML = "Tic-Tac-Toe"; 
    let vsPlayer = document.createElement('button');
    vsPlayer.className = "vsPlayer";  
    vsPlayer.innerHTML = "Human"; 
    let vsAI = document.createElement('button'); 
    vsAI.className = "vsAI"; 
    vsAI.innerHTML = "Super Advanced AI";
    let player = "human"; 
    // Functions: 
    const showMenu = () => {
        container.appendChild(startMenu); 
        startMenu.appendChild(startTitle); 
        startMenu.appendChild(vsPlayer);
        vsPlayer.addEventListener('click', () => {
            startMenu.remove(); 
            Game.setUp();
            Titlescreen.player = "human";  
        });   
        startMenu.appendChild(vsAI); 
        vsAI.addEventListener('click', () => {
            startMenu.remove(); 
            Game.setUp();
            Titlescreen.player = "comp";   
        }); 
    }; 
    // Public: 
    return {
        showMenu, 
        player,
    }
})(); 


let Game = (function() {
    let i = 0; 
    let board = document.createElement('div'); 
    board.className = "board"; 
    let currentPlayer = "one"; 
    let winDisplay = document.createElement('div');
    winDisplay.className = "winDisplay";
    winDisplay.innerHTML = ""; 
    let gameTitle = document.createElement('h1');
    gameTitle.className = "gameTitle";  
    gameTitle.innerHTML = "Tic-Tac-Toe";
    let cardOne = document.createElement('h1');
    cardOne.className = "playerCard1";
    cardOne.innerHTML = "X";   
    let cardTwo = document.createElement('h1'); 
    cardTwo.className = "playerCard2"; 
    cardTwo.innerHTML = "O"; 

    
    const whoseTurn = () => {
        if (currentPlayer == "one") {
            cardOne.className = "myTurn1"; 
            cardTwo.className = "playerCard2"; 
        }
        else if (currentPlayer == "two") {
            cardOne.className = "playerCard1"; 
            cardTwo.className = "myTurn2"; 
        }
    }

    const compMove = () => {
        let moves = board.querySelectorAll('div');
        let randomNum = Math.floor(Math.random() * 8);
        if (moves[randomNum].innerHTML == "") {
            moves[randomNum].innerHTML = "O";
            moves[randomNum].style.color = "yellow";
            checkWin.playerO();
            if (checkWin.playerO() == true) {
                checkWin.killSquares();
                gameOver(); 
            }  
        } 
        else if(moves[randomNum].innerHTML != "") {
            compMove(); 
        }
    }

    const setUp = () => {
        container.appendChild(gameTitle); 
        container.appendChild(board);
        container.appendChild(winDisplay);
        container.appendChild(cardOne);
        container.appendChild(cardTwo); 
        whoseTurn();   
        while (i != 9) {
            let makeMove = () => { 
                if (square.innerHTML == "") {
                    if (currentPlayer == "one") { 
                        square.innerHTML = "X";
                        square.style.color = "white"; 
                        currentPlayer = "two"; 
                        checkWin.selecting();
                        checkWin.playerX();
                        if (checkWin.playerX() == true) { 
                            checkWin.killSquares(); 
                            gameOver(); 
                        }
                        whoseTurn(); 
                        if (Titlescreen.player == "comp") {
                            compMove();
                            currentPlayer = "one";
                            whoseTurn();   
                        }
                    }
                    else if (currentPlayer == "two") { 
                        square.innerHTML = "O"; 
                        square.style.color = "white"; 
                        currentPlayer = "one"; 
                        checkWin.selecting();
                        checkWin.playerO();
                        if (checkWin.playerO() == true) {
                            checkWin.killSquares(); 
                            gameOver(); 
                        }
                        whoseTurn(); 
                    }
                }
            };
            let square = document.createElement('div'); 
            square.className = "square";
            square.innerHTML = ""; 
            square.id = "sq" + i; 
            board.append(square);
            square.addEventListener('click', makeMove);
            i++ 
        }
    winDisplay.innerHTML = "";
    }; 

    const gameOver = () => {
        let removeAllReplay = () => {
            replayBox.remove(); 
            gameTitle.remove();
            board.remove(); 
            winDisplay.remove();
            setUp();
            if (Titlescreen.player == "comp") {
                currentPlayer = "one";
                whoseTurn();  
            } 
            for (sqcount = 0; sqcount < 9; sqcount++) {
                let squares = board.querySelectorAll('div'); 
                squares[sqcount].innerHTML = ""; 
            }  
        }; 

        let removeAllMenu = () => {
            replayBox.remove(); 
            gameTitle.remove();
            board.remove(); 
            winDisplay.remove();
            cardTwo.remove();
            cardOne.remove(); 
            Titlescreen.showMenu();
            currentPlayer = "one"; 
            for (sqcount = 0; sqcount < 9; sqcount++) {
                let squares = board.querySelectorAll('div'); 
                squares[sqcount].innerHTML = ""; 
            }   
        }; 

        let replayBox = document.createElement('div');
        replayBox.className = "replayBox"; 
        container.appendChild(replayBox); 

        let replay = document.createElement('button'); 
        replay.className = "replay"; 
        replay.innerHTML = "Replay"; 
        replayBox.appendChild(replay); 
        replay.addEventListener('click', removeAllReplay);  

        let retMenu = document.createElement('button'); 
        retMenu.className = "replay"; 
        retMenu.innerHTML = "Menu"; 
        replayBox.appendChild(retMenu); 
        retMenu.addEventListener('click', removeAllMenu); 
    }

    // Public: 
    return {
        setUp,
    }
})(); 


let checkWin = (function() { 
    const selecting = () => {
        let sq0 = document.querySelector('#sq0'); 
        let sq1 = document.querySelector('#sq1');
        let sq2 = document.querySelector('#sq2'); 
        let sq3 = document.querySelector('#sq3'); 
        let sq4 = document.querySelector('#sq4'); 
        let sq5 = document.querySelector('#sq5'); 
        let sq6 = document.querySelector('#sq6');
        let sq7 = document.querySelector('#sq7');
        let sq8 = document.querySelector('#sq8'); 
    }; 


    const playerX = () => {
        let winDis = document.querySelector('.winDisplay'); 
        // Row
        if (sq0.innerHTML == "X" && sq1.innerHTML == "X" && sq2.innerHTML == "X") {
            winDis.innerHTML = "Player 1 Wins";
            return true; 
        }
        else if (sq3.innerHTML == "X" && sq4.innerHTML == "X" && sq5.innerHTML == "X") {
            winDis.innerHTML = "Player 1 Wins"; 
            return true; 
        }
        else if (sq6.innerHTML == "X" && sq7.innerHTML == "X" && sq8.innerHTML == "X") {
            winDis.innerHTML = "Player 1 Wins"; 
            return true; 
        }
        // col
        else if (sq0.innerHTML == "X" && sq3.innerHTML == "X" && sq6.innerHTML == "X") {
            winDis.innerHTML = "Player 1 Wins"; 
            return true; 
        }
        else if (sq1.innerHTML == "X" && sq4.innerHTML == "X" && sq7.innerHTML == "X") {
            winDis.innerHTML = "Player 1 Wins"; 
            return true; 
        }
        else if (sq2.innerHTML == "X" && sq5.innerHTML == "X" && sq8.innerHTML == "X") {
            winDis.innerHTML = "Player 1 Wins"; 
            return true; 
        }
        // diag
        else if (sq0.innerHTML == "X" && sq4.innerHTML == "X" && sq8.innerHTML == "X") {
            winDis.innerHTML = "Player 1 Wins"; 
            return true; 
        }
        else if (sq2.innerHTML == "X" && sq4.innerHTML == "X" && sq6.innerHTML == "X") {
            winDis.innerHTML = "Player 1 Wins"; 
            return true; 
        }
        if (sq0.innerHTML != "" && sq1.innerHTML != "" && sq2.innerHTML != "" &&
                 sq3.innerHTML != "" && sq4.innerHTML != "" && sq5.innerHTML != "" &&
                 sq6.innerHTML != "" && sq7.innerHTML != "" && sq8.innerHTML != "") {
                     winDis.innerHTML = "Draw"; 
                     return true; 
                 }
    }; 

    const playerO = () => {
        let winDis = document.querySelector('.winDisplay'); 
        // Row
        if (sq0.innerHTML == "O" && sq1.innerHTML == "O" && sq2.innerHTML == "O") {
            winDis.innerHTML = "Player 2 Wins";
            return true; 
        }
        else if (sq3.innerHTML == "O" && sq4.innerHTML == "O" && sq5.innerHTML == "O") {
            winDis.innerHTML = "Player 2 Wins"; 
            return true; 
        }
        else if (sq6.innerHTML == "O" && sq7.innerHTML == "O" && sq8.innerHTML == "O") {
            winDis.innerHTML = "Player 2 Wins"; 
            return true; 
        }
        // col
        else if (sq0.innerHTML == "O" && sq3.innerHTML == "O" && sq6.innerHTML == "O") {
            winDis.innerHTML = "Player 2 Wins"; 
            return true; 
        }
        else if (sq1.innerHTML == "O" && sq4.innerHTML == "O" && sq7.innerHTML == "O") {
            winDis.innerHTML = "Player 2 Wins"; 
            return true; 
        }
        else if (sq2.innerHTML == "O" && sq5.innerHTML == "O" && sq8.innerHTML == "O") {
            winDis.innerHTML = "Player 2 Wins"; 
            return true; 
        }
        // diag
        else if (sq0.innerHTML == "O" && sq4.innerHTML == "O" && sq8.innerHTML == "O") {
            winDis.innerHTML = "Player 2 Wins"; 
            return true; 
        }
        else if (sq2.innerHTML == "O" && sq4.innerHTML == "O" && sq6.innerHTML == "O") {
            winDis.innerHTML = "Player 2 Wins";
            return true;  
        }
        if (sq0.innerHTML != "" && sq1.innerHTML != "" && sq2.innerHTML != "" &&
        sq3.innerHTML != "" && sq4.innerHTML != "" && sq5.innerHTML != "" &&
        sq6.innerHTML != "" && sq7.innerHTML != "" && sq8.innerHTML != "") {
            winDis.innerHTML = "Draw"; 
            return true; 
        }
    };

    const killSquares = () => {
        for (j = 0; j < 9; j++) {
            let board = document.querySelector('.board'); 
            let squares = board.querySelectorAll('div'); 
            if (squares[j].innerHTML == "") {
                squares[j].innerHTML = " "; 
            }
        }
    }; 

    //Public
    return {
        selecting, 
        playerX, 
        playerO, 
        killSquares,
    }

})(); 


// On Load: 
Titlescreen.showMenu();