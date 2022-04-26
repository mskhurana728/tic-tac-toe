let GameBoard = (function () {

    const cellsText = document.querySelectorAll(".cellText");
    const winnerText = document.querySelector(".winnerText");
    const board = document.querySelector(".gameBoard");
    const startAgainBtn = document.querySelector(".startAgainBtn");
    let gameBoard = [];
    let player = "";

    function displayGameBoard() {

        console.log()
        for (let i = 0; i < gameBoard.length; i++) {
            if (gameBoard[i] == "X" || gameBoard[i] == "O") {
                cellsText[i].textContent = gameBoard[i];
            }

        }
    }
    function resetGameBoard() {
        gameBoard = [];
        cellsText.forEach(cellText => {
            cellText.textContent = "";
        })
        console.log(gameBoard);
        board.style.display = "none";
        player="";
        displayGameBoard();
    }
    function checkRow() {
        if (
            (gameBoard[0] != undefined && gameBoard[0] == gameBoard[1] && gameBoard[1] == gameBoard[2])
            ||
            (gameBoard[3] != undefined && gameBoard[3] == gameBoard[4] && gameBoard[4] == gameBoard[5])
            ||
            (gameBoard[6] != undefined && gameBoard[6] == gameBoard[7] && gameBoard[7] == gameBoard[8])) {
            console.log("Check row is " + true);
            return true;
        } else {
            console.log("Check row is " + false);

            return false;
        }
    }
    function checkColumn() {
        if (
            (gameBoard[0] != undefined && gameBoard[0] == gameBoard[3] && gameBoard[0] == gameBoard[6])
            ||
            (gameBoard[1] != undefined && gameBoard[1] == gameBoard[4] && gameBoard[1] == gameBoard[7])
            ||
            (gameBoard[2] != undefined && gameBoard[2] == gameBoard[5] && gameBoard[1] == gameBoard[8])

        ) {
            console.log("Check column is " + true);

            return true;
        } else {
            console.log("Check Column is " + false);

            return false;
        }

    }
    function checkDiagonal() {
        if (gameBoard[0] != undefined && gameBoard[0] == gameBoard[4] && gameBoard[0]== gameBoard[8]
            ||
            (gameBoard[2] != undefined && gameBoard[2] == gameBoard[4] && gameBoard[2]== gameBoard[6])) {
            console.log("Check diagonal is " + true);

            return true;

        } else {
            console.log("Check diagonal is " + false);

            return false;
        }

    }

    function checkTie() {
        if (gameBoard[0] != undefined && gameBoard[1] != undefined && gameBoard[2] != undefined
            &&
            gameBoard[3] != undefined && gameBoard[4] != undefined && gameBoard[5] != undefined
            &&
            gameBoard[6] != undefined && gameBoard[7] != undefined && gameBoard[8] != undefined
        ) {
            return true;
        }else{
            return false;
        }
    }

    function winner(win) {
        if (checkRow()
            ||
            checkColumn()
            ||
            checkDiagonal()

        ) {
            startAgainBtn.style.display = "block";
            winnerText.style.display = "block";
            winnerText.textContent = `${win} The winner`;
            resetGameBoard();
        } else if (checkTie()) {
            startAgainBtn.style.display = "block";
            winnerText.style.display = "block";
            winnerText.textContent = `It's a Tie!`;
            resetGameBoard();

        }
    }

    cellsText.forEach((cellText) => {
        cellText.addEventListener("click", () => {
            let index = cellText.getAttribute("data-cell");
            console.log(index);
            if (player == "" || player == "player2") {
                if (cellText.textContent == "") {
                    gameBoard[index] = "X";
                    console.log(gameBoard);
                    displayGameBoard();
                    player = "player1";
                    winner("X");
                }
            } else {
                if (cellText.textContent == "") {
                    gameBoard[index] = "O";
                    console.log(gameBoard);
                    displayGameBoard();
                    player = "player2";
                    winner("O");
                }
            }
        })
    })

    startAgainBtn.addEventListener("click", () => {
        board.style.display = "grid";
        startAgainBtn.style.display = "none";
        winnerText.style.display = "none";
    })




    displayGameBoard();



})();


