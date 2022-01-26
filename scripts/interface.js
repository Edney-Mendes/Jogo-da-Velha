

document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll(".square");

    squares.forEach((square)=>{
        square.addEventListener('click', handleClick);
    })
})



function handleClick(event) {
    
    let square = event.target;
    let position = square.id;

   if (handleMove(position)){

    if (playerTime == 0){

        jogador = "Jogador 1.";
   }
   
   else {
       
       jogador = "Jogador 2.";
   }
   

    setTimeout(()=>{

   alert("O Jogo Acabou e o Vencedor foi o: " +jogador)

    }, 10);

    }
    
    updateSquares();
    

}

function updateSquares(){

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        let position = square.id;
        let symbol = board[position];

        if (symbol != '') {

            square.innerHTML = `<div class='${symbol}'></div>`
        }
       
    })
    
}