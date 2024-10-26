// script.js

const player = document.getElementById("player");
const goal = document.getElementById("goal");
const podium = document.getElementById("podium");
const moveAmount = 10; // Distância de movimento do bonequinho

// Função para mover o jogador
function movePlayer(event) {
  const key = event.key;
  const playerPos = player.getBoundingClientRect();
  const gameArea = document.getElementById("game-area").getBoundingClientRect();

  // Detecta colisão com paredes
  const walls = document.querySelectorAll(".wall");
  function checkCollision(newTop, newLeft) {
    for (let wall of walls) {
      const wallPos = wall.getBoundingClientRect();
      if (
        newLeft < wallPos.right &&
        newLeft + player.offsetWidth > wallPos.left &&
        newTop < wallPos.bottom &&
        newTop + player.offsetHeight > wallPos.top
      ) {
        return true;
      }
    }
    return false;
  }

  // Movimenta o jogador sem ultrapassar limites
  if (key === "ArrowUp" && playerPos.top > gameArea.top) {
    let newTop = player.offsetTop - moveAmount;
    if (!checkCollision(newTop, player.offsetLeft)) {
      player.style.top = `${newTop}px`;
    }
  } else if (key === "ArrowDown" && playerPos.bottom < gameArea.bottom) {
    let newTop = player.offsetTop + moveAmount;
    if (!checkCollision(newTop, player.offsetLeft)) {
      player.style.top = `${newTop}px`;
    }
  } else if (key === "ArrowLeft" && playerPos.left > gameArea.left) {
    let newLeft = player.offsetLeft - moveAmount;
    if (!checkCollision(player.offsetTop, newLeft)) {
      player.style.left = `${newLeft}px`;
    }
  } else if (key === "ArrowRight" && playerPos.right < gameArea.right) {
    let newLeft = player.offsetLeft + moveAmount;
    if (!checkCollision(player.offsetTop, newLeft)) {
      player.style.left = `${newLeft}px`;
    }
  }

  checkGoalReached();
}

// Checa se o jogador alcançou o objetivo
function checkGoalReached() {
  const playerPos = player.getBoundingClientRect();
  const goalPos = goal.getBoundingClientRect();

  if (
    playerPos.top < goalPos.bottom &&
    playerPos.bottom > goalPos.top &&
    playerPos.left < goalPos.right &&
    playerPos.right > goalPos.left
  ) {
    setTimeout(() => {
      podium.style.display = "block";
    }, 500); // Exibe o pódio após 500 ms
    document.removeEventListener("keydown", movePlayer); // Desativa os controles
  }
}

// Escuta eventos de tecla para mover o jogador
document.addEventListener("keydown", movePlayer);
