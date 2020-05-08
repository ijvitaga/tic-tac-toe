/*----- constants -----*/
const player1 = "https://imgur.com/Y7HImbm"; //steph
const player2 = "https://imgur.com/4OXujSC"; //klay
const players = {
    '1': "purple",
    '-1': "lime",
    'null': "white"
}
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

const resetButton = document.getElementById('resetGame')


/*----- app's state (variables) -----*/
let board; //array of column arrays with 1, -1
let turn; // 1 or -1 (players)
let winner; // 1 = player 1, -1 = player 2, 'T' = tie;


/*----- cached element references -----*/
const boardEl = Array.from(document.querySelectorAll('#board > div'));

/*----- event listeners -----*/
document.getElementById('board')
    .addEventListener('click', handleClick);

resetButton.addEventListener('click', init)


/*----- functions -----*/
init();

function init() {
    board = [
        null, null, null, null, null, null, null, null, null
    ];
    turn = 1;
    winner = null;
    render();
}

function handleClick(evt) {
   const colIdx = boardEl.indexOf(evt.target);
   if (colIdx === -1) return;
   if (board[colIdx] !== null) return;
   board[colIdx]=turn
   turn *= -1
   winner = checkForWin()
   render();
   if (winner === 1, -1) return;
}

function render() {
    board.forEach(function(colArr, colIdx) {
        document.getElementById(`${colIdx}`).style.background = players[colArr]
    }); 

    if(winner === -1) {
        document.querySelector("#msg").textContent = "Lime Wins!"
    } else if (winner === 1) {
        document.querySelector("#msg").textContent = "Purple Wins!"
    } else if (winner === 'Tie') {
        document.querySelector("#msg").textContent = "It's a Tie!"
    } else {
        document.querySelector("#msg").textContent = ''
    }
    
}

function checkForWin() {
    
    for(let i = 0; i < winningCombos.length; i++) {
        if (Math.abs(board[winningCombos[i][0]]+board[winningCombos[i][1]]+board[winningCombos[i][2]]) === 3) {
            return board[winningCombos[i][0]]
        }
    }
    if (board.includes(null)) return null;

    return 'Tie';
}

button.onClick = function(init) {

}


