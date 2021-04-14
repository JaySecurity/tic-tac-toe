const board = document.getElementById('board');
const currentPlayerSpan = document.getElementById('player');
const squares = document.querySelectorAll('.square');

let player1 = true;
let playerSymbol = 'X';

board.addEventListener('click', handleClick);

function handleClick(e) {
  if (e.target.classList.contains('square')) {
    let classes = e.target.classList;
    if (classes.length > 1) return;
    else {
      e.target.innerHTML = `<h1>${playerSymbol}</h1>`;
      e.target.classList.add(playerSymbol);
      player1 = !player1;
      updateGame();
    }
  } else {
    return;
  }
}

function checkForWin() {}

function updateGame() {
  if (player1) {
    playerSymbol = 'X';
  } else {
    playerSymbol = 'O';
  }
  currentPlayerSpan.textContent = playerSymbol;
}
