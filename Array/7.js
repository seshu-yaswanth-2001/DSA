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
function moveZero(arr) {
  let n = arr.length;

  for (let i = 0; i < arr.length; i++) {
    if (a[i] === 0) {
      j = i;
      break;
    }
  }

  if (j === -1) return a;
  for(let i = j + 1; i < n; i++) {
    if(a[i] !== 0) {
        
    }
  }
}
