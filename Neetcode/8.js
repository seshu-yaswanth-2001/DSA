// valid sudoku
function sudoku(board) {
  for (let row = 0; row < 9; row++) {
    let set = new Set();
    for (let i = 0; i < 9; i++) {
      if (board[row][i] === ".") continue;
      if (set.has(board[row][i])) return false;
    }
  }

  for (let col = 0; col < 9; col++) {
    let set = new Set();
    for (let i = 0; i < 9; i++) {
      if (board[col][i] === ".") continue;
      if (set.has(board[col][i])) return false;
      set.add(board[i][col]);
    }
  }

  for (let square = 0; square < 9; square++) {
    let set = new Set();
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        let row = Math.floor(square / 3) * 3 + i;
        let col = (square % 3) * 3 + j;
        if (board[row][col] === ".") continue;
        if (set.has(board[row][col])) return false;
        set.add(board[row][col]);
      }
    }
  }

  return true;
}

function validSudoku(board) {
  let row = new Map();
  let col = new Map();
  let sqaure = new Map();

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      if (board[r][c] === ".") continue;

      const squareKey = `${Math.floor(r / 3)}, ${Math.floor(c / 3)}`;

      if (
        (row.get(r) && row.get(r).has(board[r][c])) ||
        (col.get(c) && col.get(c).has(board[r][c])) ||
        (sqaure.get(squareKey) && sqaure.get(squareKey).has(board[r][c]))
      ) {
        return false;
      }

      if (!row.has(r)) row.set(r, new Set());
      if (!col.has(c)) col.set(c, new Set());
      if (!sqaure.has(squareKey)) sqaure.set(squareKey, new Set());

      row.get(r).add(board[r][c]);
      col.get(c).add(board[r][c]);
      sqaure.get(squareKey).add(board[r][c]);
    }
  }
  return true;
}

const trueArr = [
  ["1", "2", ".", ".", "3", ".", ".", ".", "."],
  ["4", ".", ".", "5", ".", ".", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", ".", "3"],
  ["5", ".", ".", ".", "6", ".", ".", ".", "4"],
  [".", ".", ".", "8", ".", "3", ".", ".", "5"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", ".", ".", ".", ".", ".", "2", ".", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "8"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];
const falseArr = [
  ["1", "2", ".", ".", "3", ".", ".", ".", "."],
  ["4", ".", ".", "5", ".", ".", ".", ".", "."],
  [".", "9", "1", ".", ".", ".", ".", ".", "3"],
  ["5", ".", ".", ".", "6", ".", ".", ".", "4"],
  [".", ".", ".", "8", ".", "3", ".", ".", "5"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", ".", ".", ".", ".", ".", "2", ".", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "8"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

// console.log(sudoku(trueArr));
console.log(validSudoku(falseArr));
