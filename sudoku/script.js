const grid = document.getElementById('grid');

// Function to check if a number can be placed in a specific position
function isValid(board, row, col, num) {
    // Check row
    for (let i = 0; i < 9; i++) {
        if (board[row][i] === num) {
            return false;
        }
    }
    
    // Check column
    for (let i = 0; i < 9; i++) {
        if (board[i][col] === num) {
            return false;
        }
    }
    
    // Check 3x3 grid
    const startRow = Math.floor(row / 3) * 3;
    const startCol = Math.floor(col / 3) * 3;
    for (let i = startRow; i < startRow + 3; i++) {
        for (let j = startCol; j < startCol + 3; j++) {
            if (board[i][j] === num) {
                return false;
            }
        }
    }
    
    return true;
}

// Function to solve the sudoku
function solveSudoku(board) {
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (board[row][col] === 0) {
                for (let num = 1; num <= 9; num++) {
                    if (isValid(board, row, col, num)) {
                        board[row][col] = num;
                        if (solveSudoku(board)) {
                            return true;
                        }
                        board[row][col] = 0; // Backtrack
                    }
                }
                return false; // No valid number for this cell
            }
        }
    }
    return true; // Sudoku solved
}

// Function to display the solved sudoku
function displaySudoku(board) {
    const cells = document.querySelectorAll('.cell input');
    let index = 0;
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            cells[index].value = board[i][j];
            index++;
        }
    }
}

// Function to generate a random Sudoku board with solution
function generateRandomBoard() {
    const board = [];
    for (let i = 0; i < 9; i++) {
        const row = [];
        for (let j = 0; j < 9; j++) {
            row.push(0);
        }
        board.push(row);
    }
    solveSudoku(board); // Solve the empty board to get a solution

    // Randomly remove some numbers to create a puzzle
    const emptyCells = 40; // Adjust the number of empty cells as desired
    let count = 0;
    while (count < emptyCells) {
        const row = Math.floor(Math.random() * 9);
        const col = Math.floor(Math.random() * 9);
        if (board[row][col] !== 0) {
            board[row][col] = 0;
            count++;
        }
    }
    return board;
}

// Function to generate the sudoku grid with a random board
function generateGridWithRandomBoard() {
    const randomBoard = generateRandomBoard();
    const cells = document.querySelectorAll('.cell input');
    let index = 0;
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            cells[index].value = randomBoard[i][j] === 0 ? '' : randomBoard[i][j];
            index++;
        }
    }
}

// Solve button click event handler
function solve() {
    const currentBoard = getCurrentBoard();
    if (solveSudoku(currentBoard)) {
        displaySudoku(currentBoard);
        alert("Sudoku solved!");
    } else {
        alert("No solution exists for this sudoku!");
    }
}

// Function to get the current sudoku board from the grid
function getCurrentBoard() {
    const cells = document.querySelectorAll('.cell input');
    let index = 0;
    const currentBoard = [];
    for (let i = 0; i < 9; i++) {
        const row = [];
        for (let j = 0; j < 9; j++) {
            const value = cells[index].value.trim() !== '' ? parseInt(cells[index].value.trim()) : 0;
            row.push(value);
            index++;
        }
        currentBoard.push(row);
    }
    return currentBoard;
}

// Generate grid with random board
generateGridWithRandomBoard();