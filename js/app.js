// Constants

const board = document.getElementById('board');
const currentPlayerSpan = document.getElementById('player');
const squares = document.querySelectorAll('.square');
const resetBtn = document.getElementById('reset-btn');

let player1 = true;
let playerSymbol = 'X';
let isWinner;
let score = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0],
];
let turns = 0;

// Event Listeners

board.addEventListener('click', handleClick);
resetBtn.addEventListener('click', resetGame);

// Game Functions

function handleClick(e) {
  if (e.target.classList.contains('square')) {
    let classes = e.target.classList;
    if (classes.length > 1) return;
    else {
      e.target.innerHTML = `<h1>${playerSymbol}</h1>`;
      e.target.classList.add(playerSymbol);
      turns++;
      updateScore(e.target.id);
      isWinner = checkWinner();
      setTimeout(updateGame, 200);
    }
  } else {
    return;
  }
}

function updateScore(position) {
  let amount;
  player1 ? (amount = 1) : (amount = -1);
  switch (position) {
    case 'square1':
      score[0][0] += amount;
      score[1][0] += amount;
      score[2][0] += amount;
      break;
    case 'square2':
      score[0][0] += amount;
      score[1][1] += amount;
      break;
    case 'square3':
      score[0][0] += amount;
      score[1][2] += amount;
      score[2][1] += amount;
      break;
    case 'square4':
      score[0][1] += amount;
      score[1][0] += amount;
      break;
    case 'square5':
      score[0][1] += amount;
      score[1][1] += amount;
      score[2][0] += amount;
      score[2][1] += amount;
      break;
    case 'square6':
      score[0][1] += amount;
      score[1][2] += amount;
      break;
    case 'square7':
      score[0][2] += amount;
      score[1][0] += amount;
      score[2][1] += amount;
      break;
    case 'square8':
      score[0][2] += amount;
      score[1][1] += amount;
      break;
    case 'square9':
      score[0][2] += amount;
      score[1][2] += amount;
      score[2][0] += amount;
      break;
  }
}

function checkWinner() {
  let winner = null;
  score.forEach((arr) => {
    arr.forEach((element) => {
      if (element === 3) {
        winner = 'Player 1 ';
        return winner;
      } else if (element === -3) {
        winner = 'Player 2 ';
        return winner;
      }
    });
  });
  return winner;
}

function updateGame() {
  if (isWinner) {
    alert(`Congratulations ${isWinner} wins!!`);
    board.removeEventListener('click', handleClick);
    return;
  }
  if (turns > 8) {
    alert('Tie Game');
    board.removeEventListener('click', handleClick);
  }
  player1 = !player1;
  if (player1) {
    playerSymbol = 'X';
  } else {
    playerSymbol = 'O';
  }
  currentPlayerSpan.textContent = playerSymbol;
}

function resetGame() {
  // debugger;
  squares.forEach((square) => {
    square.innerHTML = '';
    square.classList.remove('X');
    square.classList.remove('O');
  });
  score = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0],
  ];
  player1 = false;
  isWinner = null;
  turns = 0;
  board.addEventListener('click', handleClick);
  updateGame();
}
