let _size = 9;
let _SudokuBoard;
let _original;
let _hint;
let _diff = 3;
function initTab() {
  let _SudokuBoard = [];
  for (let i = 0; i < _size; i++) {
    _SudokuBoard[i] = new Array(_size).fill(0);
  }
  return _SudokuBoard;
}
function isPlaceable_row(n, x, SudokuBoard) {
  for (let row = 0; row < _size; row++) {
    if (SudokuBoard[x][row] == n) return false;
  }
  return true;
}
function isPlaceable_column(n, y, SudokuBoard) {
  for (let col = 0; col < _size; col++) {
    if (SudokuBoard[col][y] == n) return false;
  }
  return true;
}
function isPlaceable_square(n, x, y, SudokuBoard) {
  let nb = Math.sqrt(_size);
  let _x = x - (x % nb);
  let _y = y - (y % nb);
  for (let row = _x; row < _x + nb; row++) {
    for (let col = _y; col < _y + nb; col++) {
      if (SudokuBoard[row][col] == n) return false;
    }
  }
  return true;
}
function isValid(n, x, y, SudokuBoard) {
  if (SudokuBoard[x][y] == 0) {
    if (
      isPlaceable_row(n, x, SudokuBoard) &&
      isPlaceable_column(n, y, SudokuBoard) &&
      isPlaceable_square(n, x, y, SudokuBoard)
    )
      return true;
  }
  return false;
}
function isEmpty(row, col, SudokuBoard) {
  if (SudokuBoard[row][col] == 0) {
    return true;
  }
  return false;
}
function resolve(position, SudokuBoard) {
  if (position == _size * _size) return true;
  let row = parseInt(position / _size, 10);
  let col = parseInt(position % _size, 10);
  if (!isEmpty(row, col, SudokuBoard)) return resolve(position + 1, SudokuBoard);
  let v = [];
  for (let i = 1; i < _size + 1; i++) v.push(i);
  v = shuffle(v);
  for (let i = 0; i < _size; i++) {
    if (isValid(v[i], row, col, SudokuBoard)) {
      SudokuBoard[row][col] = v[i];
      if (resolve(position + 1, SudokuBoard)) return true;
      SudokuBoard[row][col] = 0;
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
  switch (_diff) {
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
function generateGrid(reste, SudokuBoard) {
  let N = reste;
  if (N > 0) {
    let row = getRandomInt(_size);
    let col = getRandomInt(_size);
    if (SudokuBoard[row][col] != 0) {
      SudokuBoard[row][col] = 0;
      N--;
    }
    generateGrid(N, SudokuBoard);
  }
}
function displayBoard(board) {
  const boardContainer = document.getElementById("board");
  boardContainer.innerHTML = "";
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const cell = document.createElement("input");
      cell.type = "tel";
      cell.classList.add("cell");
      cell.value = board[i][j] !== 0 ? board[i][j] : ""; // 0이 아니면 숫자 표시
      boardContainer.appendChild(cell);
    }
  }
  const cells = document.querySelectorAll("#board .cell");
  cells.forEach((cell, index) => {
    const row = parseInt(index / _size);
    const col = index % _size;
    if (board[row][col] == _hint[row][col] && board[row][col] !== 0) {
      cell.disabled = true;
    }
    cell.addEventListener("input", function () {
      if (isNaN(this.value) || this.value < 1 || this.value > 9) {
        this.value = ""; // 숫자가 아닌 경우 빈 문자열로 설정
      } else {
        handleCellInput(row, col, this.value); // 숫자인 경우에만 처리
      }
    });
  });
}
function handleCellInput(row, col, value) {
  const parsedValue = parseInt(value);
  let board = getBoard();
  const CellIndex = row * 9 + col;
  const cells = document.querySelectorAll("#board .cell");
  if (!isNaN(parsedValue) && parsedValue >= 1 && parsedValue <= 9) {
    board[row][col] = parsedValue;
    if (solveSudoku(board)) {
      if (isValidSudoku(board)) {
        message.textContent = "";
        cells[CellIndex].style.color = "black";
      } else {
        message.textContent = "틀린 숫자입니다.";
        cells[CellIndex].style.color = "red";
      }
    } else {
      message.textContent = "틀린 숫자입니다.";
      cells[CellIndex].style.color = "red";
    }
  } else {
    board[row][col] = 0; // 유효하지 않은 값이면 0으로 설정
  }
}
function generateSudoku() {
  message.textContent = "";
  let _SudokuBoard = initTab();
  resolve(0, _SudokuBoard);
  generateGrid(getDifficulty(), _SudokuBoard); // 보드 생성
  _original = JSON.parse(JSON.stringify(_SudokuBoard));
  _hint = _SudokuBoard.slice();
  displayBoard(_SudokuBoard); // 보드 표시
}
function isValidSudoku(board) {
  for (let i = 0; i < 9; i++) {
    let rowSet = new Set(); // 각 행을 검사
    for (let j = 0; j < 9; j++) {
      if (board[i][j] !== 0 && rowSet.has(board[i][j])) {
        return false; // 중복된 숫자가 있음
      }
      rowSet.add(board[i][j]);
    }
  }
  for (let j = 0; j < 9; j++) {
    let colSet = new Set(); // 각 열을 검사
    for (let i = 0; i < 9; i++) {
      if (board[i][j] !== 0 && colSet.has(board[i][j])) {
        return false; // 중복된 숫자가 있음
      }
      colSet.add(board[i][j]);
    }
  }
  for (let k = 0; k < 9; k++) {
    let boxSet = new Set(); // 각 3x3 그룹을 검사
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
function solveSudoku(board) {
  const emptyCell = findEmptyCell(board);
  if (!emptyCell) {
    return true; // 스도쿠가 완성됨
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
  let board = getBoard();
  if (isValidSudoku(board)) {
    if (solveSudoku(board)) {
      displayBoard(board);
      message.textContent = "스도쿠 정답";
    } else {
      message.textContent = "정답이 존재하지 않습니다.";
    }
  } else {
    board = JSON.parse(JSON.stringify(_original));
    if (solveSudoku(board)) {
      displayBoard(board);
      message.textContent = "스도쿠 정답";
    } else {
      message.textContent = "정답이 존재하지 않습니다.";
    }
  }
}
function validateSudokubtn() {
  const board = getBoard();
  const emptyCell = findEmptyCell(board);
  if (!emptyCell) {
    if (isValidSudoku(board)) {
      message.textContent = "풀이성공!";
    } else {
      message.textContent = "풀이실패...";
    }
  } else {
    message.textContent = "빈칸을 다 채워주세요!";
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
    message.textContent = "힌트를 제공할 빈 칸이 없습니다!";
    return;
  }
  const randomIndex = Math.floor(Math.random() * emptyCells.length);
  const [row, col] = emptyCells[randomIndex];
  const board = getBoard();
  if (solveSudoku(solution)) {
    const hint = solution[row][col];
    board[row][col] = hint;
    _hint[row][col] = hint;
    message.textContent = `힌트: 세로 ${row + 1}번째, 가로 ${col + 1}번째칸은 ${hint}입니다.`;
    displayBoard(board);
    const hintCellIndex = row * 9 + col;
    const cells = document.querySelectorAll("#board .cell");
    cells[hintCellIndex].classList.add("hint");
  }
}
function resetSudoku() {
  message.textContent = "";
  _SudokuBoard = JSON.parse(JSON.stringify(_original));
  _hint = JSON.parse(JSON.stringify(_original));
  displayBoard(_original);
}

document.getElementById("generate").addEventListener("click", generateSudoku);
document.getElementById("validate").addEventListener("click", validateSudokubtn);
document.getElementById("hint").addEventListener("click", provideHint);
document.getElementById("answer").addEventListener("click", solveSudokubtn);
document.getElementById("reset").addEventListener("click", resetSudoku);
