const scoreTitle = document.getElementById('score');
const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

const speed = 8;

let tileCount = 20;
let tilesize = canvas.width / tileCount - 2;

let score = 1;

let playerX = 0;
let playerY = 0;

let pointX = 1;
let pointY = 0;

let xVelocity = 0;
let yVelocity = 0;

// Game loop
function drawGame() {
  clearScreen();
  changePlayerPosition();
  checkPointCollision();
  drawPoint()
  drawPlayer()
  setTimeout(drawGame, 1000/speed);
}

function clearScreen() {
  ctx.fillStyle = '#212121';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawPlayer() {
  ctx.fillStyle = '#00ba88';
  ctx.fillRect(playerX * 40, playerY * 40, tilesize, tilesize);
}

function drawPoint() {
  ctx.fillStyle = '#fff';
  ctx.fillRect(pointX * 40, pointY * 40, tilesize, tilesize)
}

function checkPointCollision() {
  if (pointX === playerX && pointY === playerY) {
    pointX = Math.floor(Math.random() * tileCount);
    pointY = Math.floor(Math.random() * tileCount);
    scoreTitle.innerHTML = score++;
  }
}

function changePlayerPosition() {
  playerX = playerX + xVelocity;
  playerY = playerY + yVelocity;
}

document.body.addEventListener('keydown', keyDown);

function keyDown(event) {
  // up
  if (event.keyCode == 38) {
    yVelocity = -1;
    xVelocity = 0;
  }
  
  // down
  if (event.keyCode == 40) {
    yVelocity = 1;
    xVelocity = 0;
  }
  
  // left
  if (event.keyCode == 37) {
    yVelocity = 0;
    xVelocity = -1;
  }
  
  // right
  if (event.keyCode == 39) {
    yVelocity = 0;
    xVelocity = 1;
  }

}

drawGame();