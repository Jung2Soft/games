const message = document.getElementById('message');
const dis_board = document.getElementById('board');

function generateSudoku() {
  let board = new Array(9).fill(null).map(() => new Array(9).fill(0)); // 빈 스도쿠 보드 생성

  // 아홉 3×3 칸에 숫자가 1부터 9까지 하나씩만 들어가도록 채우기
  for (let i = 0; i < 9; i += 3) {
      for (let j = 0; j < 9; j += 3) {
          let numbers = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]); // 1부터 9까지 숫자를 섞음
          for (let k = 0; k < 9; k++) {
              let x = i + Math.floor(k / 3);
              let y = j + (k % 3);
              board[x][y] = numbers[k];
          }
      }
  }

  // 스도쿠 보드에 숫자를 무작위로 채우기
  for (let i = 0; i < 81; i++) {
      let x = Math.floor(i / 9);
      let y = i % 9;
      if (board[x][y] === 0) {
          let numbers = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]);
          for (let num of numbers) {
              if (isValidPlacement(board, x, y, num)) {
                  board[x][y] = num;
                  break;
              }
          }
      }
  }

  // 필요한 숫자 개수에 맞게 숫자를 제거하여 문제 생성
  let removedCount = 81 - 30;
  while (removedCount > 0) {
      let x = Math.floor(Math.random() * 9);
      let y = Math.floor(Math.random() * 9);
      if (board[x][y] !== 0) {
          board[x][y] = 0;
          removedCount--;
      }
  }
  displayBoard(board);
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function isValidPlacement(board, row, col, num) {
  for (let i = 0; i < 9; i++) {
      if (board[row][i] === num || board[i][col] === num) {
          return false;
      }
  }
  let startRow = Math.floor(row / 3) * 3;
  let startCol = Math.floor(col / 3) * 3;
  for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
          if (board[startRow + i][startCol + j] === num) {
              return false;
          }
      }
  }
  return true;
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

// 스도쿠 풀기 함수
function validateSudoku(board) {
    if (isValidSudoku(board)) {
        message.textContent = "Valid Sudoku!";
    } else {
        message.textContent = "Invalid Sudoku!";
    }
}

function provideHint(sudokuBoard) {
  // 빈 셀에 대한 힌트를 찾음
  let emptyCells = [];
  for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
          if (sudokuBoard[i][j] === 0) {
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

  // 정답을 모른 상태에서 힌트 제공하기 위해 해당 셀의 값을 저장하고 0으로 변경
  const hint = sudokuBoard[row][col];
  sudokuBoard[row][col] = 0;

  message.textContent = `Hint: Fill cell at row ${row + 1}, column ${col + 1} with value ${hint}.`;
}

function solveSudoku(board) {
    const emptyCell = findEmptyCell(board);
    if (!emptyCell) {
        return true; // 기저 사례: 더 이상 빈 셀이 없음 -> 퍼즐이 완료됨
    }

    const [row, col] = emptyCell;

    for (let num = 1; num <= 9; num++) {
        if (isValidMove(board, row, col, num)) {
            board[row][col] = num;

            if (solveSudoku(board)) {
                return true;
            }

            board[row][col] = 0; // 백트래킹
        }
    }

    return false; // 현재 설정이 해결책이 아님
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

function isValidMove(board, row, col, num) {
    // 행과 열에 중복된 숫자가 있는지 확인
    for (let i = 0; i < 9; i++) {
        if (board[row][i] === num || board[i][col] === num) {
            return false;
        }
    }

    // 3x3 그룹에 중복된 숫자가 있는지 확인
    const startRow = Math.floor(row / 3) * 3;
    const startCol = Math.floor(col / 3) * 3;
    for (let i = startRow; i < startRow + 3; i++) {
        for (let j = startCol; j < startCol + 3; j++) {
            if (board[i][j] === num) {
                return false;
            }
        }
    }

    return true; // 유효한 수
}

// 스도쿠 해답 보기 함수 전체 정답
function showAnswer(board) {
    if (solveSudoku(board)) {
        displayBoard(board);
    } else {
        message.textContent = "No solution exists.";
    }
}

// 스도쿠 보드를 HTML에 표시하는 함수
function displayBoard(board) {
    const boardContainer = document.getElementById("board");
    boardContainer.innerHTML = ""; // 이전에 표시된 내용을 지움

    // 각 셀을 순회하며 HTML에 추가
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.textContent = board[i][j] !== 0 ? board[i][j] : ""; // 0이 아니면 숫자 표시
            boardContainer.appendChild(cell);
        }
    }
}

// 버튼 이벤트 핸들러 등록
document.getElementById("generate").addEventListener("click", generateSudoku);
document.getElementById("validate").addEventListener("click", validateSudoku(board));
document.getElementById("hint").addEventListener("click", providehint(board));
document.getElementById("answer").addEventListener("click", showAnswer(board));
