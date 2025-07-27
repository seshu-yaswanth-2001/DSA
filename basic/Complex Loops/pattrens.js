/**
 Print
 * * * *
 * * * *
 * * * *
 * * * *
 */
function printStar(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      row = row + "*";
    }
    console.log(row);
  }
}
printStar(5);

/**
 * Print
 *
 **
 ***
 ****
 *****
 */

for (let i = 0; i < 5; i++) {
  let row = "";
  for (let j = 0; j < i + 1; j++) {
    row += "*";
  }
  console.log(row);
}

/**
1
12
123
1234
12345

 */

for (let i = 0; i < 5; i++) {
  let row = "";
  for (let j = 0; j < i + 1; j++) {
    row += j + 1;
  }
  console.log(row);
}

/**
 * 1
 * 2 2
 * 3 3 3
 * 4 4 4 4
 * 5 5 5 5 5
 */
for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 0; j < i; j++) {
    row = row + i;
  }
  console.log(row);
}

/**
 * 12345678910
 * 123456789
 * 12345678
 * 1234567
 * 123456
 * 12345
 * 1234
 * 123
 * 12
 * 1
 */
let n = 10;
for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < n - i; j++) {
    row += j + 1;
  }
  console.log(row);
}

/**
 **********
 *********
 ********
 *******
 ******
 *****
 ****
 ***
 **
 *
 */
for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < n - i; j++) {
    row = row + "*";
  }
  console.log(row);
}

/**
_________*
________**
_______***
______****
_____*****
____******
___*******
__********
_*********
**********
 */

for (let i = 0; i < n; i++) {
  let row = "";

  for (let j = 0; j < n - (i + 1); j++) {
    row += " ";
  }
  for (let k = 0; k < i + 1; k++) {
    row += "*";
  }
  console.log(row);
}

/**
1
10
101
1010
10101
101010
1010101
10101010
101010101
1010101010
 */

for (let i = 0; i < n; i++) {
  let row = "";
  let toggle = 1;
  for (let j = 0; j < i + 1; j++) {
    row += toggle;
    toggle = toggle === 1 ? 0 : 1;
  }
  console.log(row);
}

// 1010101010
// 101010101
// 10101010
// 1010101
// 101010
// 10101
// 1010
// 101
// 10
// 1
console.log("reverse");
for (let i = 0; i < n; i++) {
  let row = "";
  let toggle = 1;
  for (let j = 0; j < n - i; j++) {
    row += toggle;
    toggle = toggle === 1 ? 0 : 1;
  }
  console.log(row);
}
