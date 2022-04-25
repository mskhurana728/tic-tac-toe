let GameBoard = (function(){

    const cellsText= document.querySelectorAll(".cellText");
    const cell = document.querySelector(".cell");

    let gameBoard = [];
    
    let player="";

    function displayGameBoard(){
       
       for(let i=0;i<gameBoard.length;i++){
               if(gameBoard[i]=="X"||gameBoard[i]=="O"){
                cellsText[i].textContent=gameBoard[i];
            }
            
       }
    }


    
    cellsText.forEach((cellText)=>{
        cellText.addEventListener("click",()=>{
            let index=cellText.getAttribute("data-cell");
            console.log(index);
            if(player=="" || player=="player2" ){
                if(cellText.textContent==""){
                    gameBoard[index]="X";
                    console.log(gameBoard);
                    displayGameBoard();
                    player="player1";
                }
            }else{
                if(cellText.textContent==""){
                    gameBoard[index]="O";
                    console.log(gameBoard);
                    displayGameBoard();
                    player="player2";
                }
            }
        })
    })



    displayGameBoard();



})();


