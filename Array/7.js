// move all zeros to the end of an array

// Brute force approach

function moveZeros(arr) {
  let n = arr.length;
  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      temp.push(arr[i]);
    }
  }

  let nonZeroSize = temp.length;
  for (let i = 0; i < nonZeroSize; i++) {
    arr[i] = temp[i];
  }

  for (let i = nonZeroSize; i < n; i++) {
    arr[i] = 0;
  }

  return arr;
}

const arr = [1, 0, 2, 3, 4, 0, 5, 6, 7, 8, 0, 10, 11, 0, 23];
console.log(moveZeros(arr));

// optimal solution
function moveZerosToEnd(arr) {
  let count = 0; // Pos for next non-zero
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[count++] = arr[i];
    }
  }
  while (count < arr.length) {
    arr[count++] = 0;
  }
  return arr;
}


const arr = [1, 0, 2, 3, 4, 0, 5, 6, 7, 8, 0, 10, 11, 0, 23];
console.log(moveZerosToEnd(arr));
