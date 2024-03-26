let _size = 9;
let _grille;
function initTab() {
  let _grille = [];
  for (let i = 0; i < _size; i++) {
    _grille[i] = new Array(_size).fill(0);
  }
  return _grille;
}
function isPlaceable_row(n, x, grille) {
  for (let row = 0; row < _size; row++) {
    if (grille[x][row] == n) return false;
  }
  return true;
}
function isPlaceable_column(n, y, grille) {
  for (let col = 0; col < _size; col++) {
    if (grille[col][y] == n) return false;
  }
  return true;
}
function isPlaceable_square(n, x, y, grille) {
  let nb = Math.sqrt(_size);
  let _x = x - (x % nb);
  let _y = y - (y % nb);
  for (let row = _x; row < _x + nb; row++) {
    for (let col = _y; col < _y + nb; col++) {
      if (grille[row][col] == n) return false;
    }
  }
  return true;
}
function isValid(n, x, y, grille) {
  if (grille[x][y] == 0) {
    if (
      isPlaceable_row(n, x, grille) &&
      isPlaceable_column(n, y, grille) &&
      isPlaceable_square(n, x, y, grille)
    )
      return true;
  }
  return false;
}
function isEmpty(row, col, grille) {
  if (grille[row][col] == 0) {
    return true;
  }
  return false;
}
function resolve(position, grille) {
  if (position == _size * _size) return true;
  let row = parseInt(position / _size, 10);
  let col = parseInt(position % _size, 10);
  if (!isEmpty(row, col, grille)) return resolve(position + 1, grille);
  let v = [];
  for (let i = 1; i < _size + 1; i++) v.push(i);
  v = shuffle(v);
  for (let i = 0; i < _size; i++) {
    if (isValid(v[i], row, col, grille)) {
      grille[row][col] = v[i];
      if (resolve(position + 1, grille)) return true;
      grille[row][col] = 0;
    }
  }
  return false;
}
function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
function getDifficulty() {
  let res = 0;
  switch (3) {
    case 1:
      res = _size * _size * 0.3;
      break;
    case 2:
      res = _size * _size * 0.4;
      break;
    case 3:
      res = _size * _size * 0.5;
      break;
    case 4:
      res = _size * _size * 0.6;
      break;
    case 5:
      res = _size * _size * 0.7;
      break;
    default:
      res = _size * _size * 0.3;
      break;
  }
  return res;
}
function generateGrid(reste, grille) {
  let N = reste;
  if (N > 0) {
    let row = getRandomInt(_size);
    let col = getRandomInt(_size);
    if (grille[row][col] != 0) {
      grille[row][col] = 0;
      N--;
    }
    generateGrid(N, grille);
  }
}
function displayBoard(board) {
  const boardContainer = document.getElementById("board");
  boardContainer.innerHTML = "";
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const cell = document.createElement("input");
      cell.classList.add("cell");
      cell.value = board[i][j] !== 0 ? board[i][j] : ""; // 0이 아니면 숫자 표시
      //cell.addEventListener("input", function() {
      //handleCellInput(i, j, this.value); // 입력 값과 함께 처리
      //});
      boardContainer.appendChild(cell);
    }
  }
}
function generateSudoku() {
  let _grille = initTab();
  resolve(0, _grille);
  _grilleSoluce = _grille.slice(); // 솔루션 복사
  generateGrid(getDifficulty(), _grille); // 보드 생성
  displayBoard(_grille); // 보드 표시
}
function isValidSudoku(board) {
  // 각 행을 검사
  for (let i = 0; i < 9; i++) {
    let rowSet = new Set();
    for (let j = 0; j < 9; j++) {
      if (board[i][j] !== 0 && rowSet.has(board[i][j])) {
        return false; // 중복된 숫자가 있음
      }
      rowSet.add(board[i][j]);
    }
  }
  // 각 열을 검사
  for (let j = 0; j < 9; j++) {
    let colSet = new Set();
    for (let i = 0; i < 9; i++) {
      if (board[i][j] !== 0 && colSet.has(board[i][j])) {
        return false; // 중복된 숫자가 있음
      }
      colSet.add(board[i][j]);
    }
  }
  // 각 3x3 그룹을 검사
  for (let k = 0; k < 9; k++) {
    let boxSet = new Set();
    const rowStart = Math.floor(k / 3) * 3;
    const colStart = (k % 3) * 3;
    for (let i = rowStart; i < rowStart + 3; i++) {
      for (let j = colStart; j < colStart + 3; j++) {
        if (board[i][j] !== 0 && boxSet.has(board[i][j])) {
          return false; // 중복된 숫자가 있음
        }
        boxSet.add(board[i][j]);
      }
    }
  }
  return true; // 유효한 스도쿠
}
function validateSudoku() {
  const board = getBoard();
  if (isValidSudoku(board)) {
    message.textContent = "Valid Sudoku!";
  } else {
    message.textContent = "Invalid Sudoku!";
  }
}
function getBoard() {
  const board = [];
  const cells = document.querySelectorAll("#board .cell");
  let row = [];
  cells.forEach((cell, index) => {
    if (index % 9 === 0 && index !== 0) {
      board.push(row);
      row = [];
    }
    row.push(cell.value !== "" ? parseInt(cell.value) : 0); // 수정된 부분
  });
  board.push(row); // 마지막 줄 추가
  return board;
}
function findEmptyCell(board) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === 0) {
        return [i, j];
      }
    }
  }
  return null; // 빈 셀이 없음
}
/* 백트래킹 */
function solveSudoku(board) {
  const emptyCell = findEmptyCell(board);
  if (!emptyCell) {
    return true; // 더 이상 빈 셀이 없음 -> 퍼즐이 완료됨
  }
  const [row, col] = emptyCell;
  for (let num = 1; num <= 9; num++) {
    if (isValid(num, row, col, board)) {
      board[row][col] = num;
      if (solveSudoku(board)) {
        return true;
      }
      board[row][col] = 0; // 백트래킹
    }
  }
  return false; // 현재 설정이 해결책이 아님
}
function solveSudokubtn() {
  const board = getBoard();
  if (solveSudoku(board)) {
    displayBoard(board);
    message.textContent = "Solved!";
  } else {
    message.textContent = "No solution exists.";
  }
}
function provideHint() {
  const solution = getBoard();
  let emptyCells = [];
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (solution[i][j] === 0) {
        emptyCells.push([i, j]);
      }
    }
  }
  if (emptyCells.length === 0) {
    message.textContent = "No empty cells to provide hints for.";
    return;
  }
  // 빈 셀 중 무작위로 하나를 선택하여 힌트 제공
  const randomIndex = Math.floor(Math.random() * emptyCells.length);
  const [row, col] = emptyCells[randomIndex];
  const board = getBoard();
  if (solveSudoku(solution)) {
    const hint = solution[row][col];
    board[row][col] = hint;
    message.textContent = `Hint: Fill cell at row ${row + 1}, column ${
      col + 1
    } with value ${hint}.`;
    displayBoard(board);
  }
}
document.getElementById("generate").addEventListener("click", generateSudoku);
document.getElementById("validate").addEventListener("click", validateSudoku);
document.getElementById("hint").addEventListener("click", provideHint);
document.getElementById("answer").addEventListener("click", solveSudokubtn);
