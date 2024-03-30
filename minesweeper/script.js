const overlay = document.getElementById("overlay");
const overlayContent = document.getElementById("overlay-content");
const overlayMessage = document.getElementById("overlay-message");
const container = document.getElementById("container");
const difficultyButtons = document.getElementById("difficulty-buttons");
const timeDisplay = document.createElement("div"); // 게임 중 플레이 시간을 표시할 요소
const resultDisplay = document.createElement("div"); // 게임 결과 및 플레이 시간을 표시할 요소
let size = 9; // 기본적으로 초급으로 시작
let mineCount = 10;
let mines = [];
let revealed = [];
let gameOver = false;
let startTime = null; // 게임 시작 시간
let endTime = null; // 게임 종료 시간
let timerInterval = null; // 시간 갱신을 위한 타이머 인터벌

// 처음에는 보드를 숨기고 시작 화면을 보여줌
overlay.style.display = "flex";

function startNewGame() {
  overlay.style.display = "none"; // 시작 화면 숨김
  container.style.display = "grid"; // 보드를 보여줌
  container.innerHTML = ""; // 이전 게임의 보드 제거
  mines = [];
  revealed = [];
  gameOver = false;
  clearInterval(timerInterval); // 타이머 초기화
  timeDisplay.textContent = "Time: 0"; // 시간 표시 초기화
  initializeGame();
  startTime = new Date(); // 게임 시작 시간 기록
}

function setDifficulty(level) {
  switch (level) {
    case "beginner":
      size = 9;
      mineCount = 10;
      break;
    case "intermediate":
      size = 16;
      mineCount = 40;
      break;
    case "expert":
      size = 30;
      mineCount = 99;
      break;
    case "custom":
      size = parseInt(prompt("보드판의 크기를 설정해주세요. ex) 10 -> 10x10 보드판"));
      
      while (isNaN(size) || size === null) {
        size = parseInt(prompt("보드판의 크기를 설정해주세요. ex) 10 -> 10x10 보드판"));
      }
      mineCount = parseInt(prompt(`지뢰의 갯수를 설정해주세요. ex) ${size}x${size}보드의 경우 최대 ${size * size - 1}개`));
      while (isNaN(mineCount) || mineCount === null) {
        mineCount = parseInt(prompt(`지뢰의 갯수를 설정해주세요. ex) ${size}x${size}보드의 경우 최대 ${size * size - 1}개`));
      }
      break;
  }
  startNewGame();
}

function initializeGame() {
  container.style.gridTemplateColumns = `repeat(${size}, 30px)`; // 보드 크기를 유동적으로 설정
  container.style.gridTemplateRows = `repeat(${size}, 30px)`; // 보드 크기를 유동적으로 설정
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.setAttribute("data-row", i);
      cell.setAttribute("data-col", j);
      cell.textContent = "";
      cell.addEventListener("click", handleCellClick);
      cell.addEventListener("contextmenu", handleCellRightClick); // 우클릭 이벤트 추가
      container.appendChild(cell);
    }
  }

  // Plant mines
  for (let i = 0; i < mineCount; i++) {
    let row = Math.floor(Math.random() * size);
    let col = Math.floor(Math.random() * size);
    while (mines.includes(`${row}-${col}`)) {
      row = Math.floor(Math.random() * size);
      col = Math.floor(Math.random() * size);
    }
    mines.push(`${row}-${col}`);
  }
}

function handleCellClick(event) {
  const row = parseInt(event.target.getAttribute("data-row"));
  const col = parseInt(event.target.getAttribute("data-col"));

  if (!gameOver && !event.target.classList.contains("flag")) {
    // 게임이 종료되지 않았고, 깃발이 있는 셀은 클릭할 수 없도록
    if (mines.includes(`${row}-${col}`)) {
      if (revealed.length === 0) {
        // 처음 클릭한 셀이 지뢰면 다시 지뢰를 놓도록
        startNewGame();
        return;
      }
      event.target.textContent = "💣";
      revealMines();
      overlayMessage.textContent = "Game Over!";
      overlay.style.display = "flex"; // 게임 오버 메시지 보여줌
      gameOver = true;
      endTime = new Date(); // 게임 종료 시간 기록
      displayGameResult();
      removeAllEventListeners();
    } else {
      const count = countAdjacentMines(row, col);
      event.target.textContent = count > 0 ? count : "";
      if (count === 0) {
        revealEmptyCells(row, col);
      }
      event.target.classList.add("clicked");
      checkWin(); // 승리 여부 확인
    }
  }
}

function handleCellRightClick(event) {
  event.preventDefault(); // 우클릭 메뉴 무시
  if (!gameOver) {
    const cell = event.target;
    if (!cell.classList.contains("clicked")) {
      // 이미 클릭된 셀에는 깃발을 세울 수 없도록
      if (cell.textContent === "") {
        cell.textContent = "🚩"; // 깃발 아이콘
        cell.classList.add("flag");
        cell.removeEventListener("click", handleCellClick); // 좌클릭 이벤트 제거
      } else if (cell.textContent === "🚩") {
        cell.textContent = ""; // 깃발 제거
        cell.classList.remove("flag");
        cell.addEventListener("click", handleCellClick); // 좌클릭 이벤트 추가
      }
    }
  }
}

function countAdjacentMines(row, col) {
  let count = 0;
  for (let i = row - 1; i <= row + 1; i++) {
    for (let j = col - 1; j <= col + 1; j++) {
      if (mines.includes(`${i}-${j}`)) {
        count++;
      }
    }
  }
  return count;
}

function revealEmptyCells(row, col) {
  const key = `${row}-${col}`;
  if (!revealed.includes(key)) {
    revealed.push(key);
    const cell = document.querySelector(
      `[data-row="${row}"][data-col="${col}"]`,
    );
    cell.classList.add("clicked");
    for (let i = row - 1; i <= row + 1; i++) {
      for (let j = col - 1; j <= col + 1; j++) {
        if (i >= 0 && i < size && j >= 0 && j < size) {
          const adjacentCell = document.querySelector(
            `[data-row="${i}"][data-col="${j}"]`,
          );
          if (!mines.includes(`${i}-${j}`)) {
            const count = countAdjacentMines(i, j);
            adjacentCell.textContent = count > 0 ? count : "";
            if (count === 0) {
              revealEmptyCells(i, j);
            }
            adjacentCell.classList.add("clicked"); // 숫자 칸에도 스타일 적용
          }
        }
      }
    }
  }
}

function revealMines() {
  mines.forEach((mine) => {
    const [row, col] = mine.split("-");
    const cell = document.querySelector(
      `[data-row="${row}"][data-col="${col}"]`,
    );
    cell.textContent = "💣";
  });
}

function checkWin() {
  const allCells = document.querySelectorAll(".cell");
  let win = true;
  allCells.forEach((cell) => {
    const row = parseInt(cell.getAttribute("data-row"));
    const col = parseInt(cell.getAttribute("data-col"));
    if (
      !mines.includes(`${row}-${col}`) &&
      !cell.classList.contains("clicked")
    ) {
      win = false;
    }
  });
  if (win) {
    overlayMessage.textContent = "축하드립니다! 승리하셨습니다!";
    overlay.style.display = "flex"; // 승리 메시지 보여줌
    gameOver = true;
    endTime = new Date(); // 게임 종료 시간 기록
    displayGameResult();
    removeAllEventListeners();
  }
}

function removeAllEventListeners() {
  const allCells = document.querySelectorAll(".cell");
  allCells.forEach((cell) => {
    cell.removeEventListener("click", handleCellClick);
    cell.removeEventListener("contextmenu", handleCellRightClick);
  });
}

function displayGameResult() {
  const resultTime = Math.floor((endTime - startTime) / 1000); // 게임 플레이 시간 계산 (초)
  resultDisplay.textContent = `플레이 타임: ${resultTime} 초`;
  overlayContent.appendChild(resultDisplay); // 결과 탭에 결과 표시
}

window.addEventListener("DOMContentLoaded", () => {
  timeDisplay.style.color = "#fff"; // 시간 표시 요소 스타일 설정
  resultDisplay.style.color = "#fff"; // 결과 표시 요소 스타일 설정
});
