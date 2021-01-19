//Why create this as a factory function as not just a variable?
const Board = (() => {
  let board = [[0, 0, 0, 0, 0, 0, 0, 0, 0]];
  return { board };
})();

let num = 1;
Board.board.forEach((e) => {
  e.forEach((i) => {
    let box = document.createElement('div');
    let board = document.getElementsByClassName('game-board');
    box.classList.add('box');
    box.id = num;
    board[0].appendChild(box);
    num += 1;
  });
});

const Player = (name) => {
  let score = 0;
  const addScore = () => score + 1;

  return { name, score };
};

let sam = Player('Sam');
console.log(sam.turn);

const Game = (player1, player2) => {
  const activePlayer1 = () => player1;
  const activePlayer2 = () => player2;
  const turn = (player1, player2) => {
    if (activePlayer1) {
      return 'Player1';
    } else {
      return 'Player2';
    }
  };
  const win = () => {};
};

//Submits name to display
go1.addEventListener('click', () => {
  let play1 = document.createElement('p');
  nameOfPlayers.appendChild(play1);
  play1.innerHTML = player1Name.value;
  player1 = Player(player1Name.value);
});

go2.addEventListener('click', () => {
  let play2 = document.createElement('p');
  nameOfPlayers.appendChild(play2);
  play2.innerHTML = player2Name.value;
  player2 = Player(player2Name.value);
});

//Changes status of box to X or O
let boxes = document.querySelectorAll('.box');
let c = 1;
boxes.forEach((e) => {
  e.addEventListener('click', () => {
    if (c % 2 == 1) {
      e.innerHTML = 'X';
      console.log(e);
    } else {
      e.innerHTML = 'O';
    }
    c += 1;
  });
});
