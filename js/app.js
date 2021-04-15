const board = document.getElementById('board');
const currentPlayerSpan = document.getElementById('player');
const squares = document.querySelectorAll('.square');

let player1 = true;
let playerSymbol = 'X';
let isWinner;
let score = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0],
];

board.addEventListener('click', handleClick);

function handleClick(e) {
  if (e.target.classList.contains('square')) {
    let classes = e.target.classList;
    if (classes.length > 1) return;
    else {
      e.target.innerHTML = `<h1>${playerSymbol}</h1>`;
      e.target.classList.add(playerSymbol);
      updateScore(e.target.id);
      isWinner = checkWinner();
      setTimeout(updateGame, 500);
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
  //debugger;
  let winner = null;
  score.forEach((arr) => {
    arr.forEach((element) => {
      console.log(element);
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
    alert(`Congradulations ${isWinner} wins!!`);
    return;
  }
  player1 = !player1;
  if (player1) {
    playerSymbol = 'X';
  } else {
    playerSymbol = 'O';
  }
  currentPlayerSpan.textContent = playerSymbol;
}
