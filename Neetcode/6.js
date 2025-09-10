// Encode & Decode the arr of strings
// ["we", "say", ":", "yes"]

function encode(strs) {
  let encoded = "";
  for (let str of strs) {
    encoded += str.length + "#" + str;
  }
  return encoded;
}

function decode(str) {
  let result = [];
  let i = 0;

  while (i < str.length) {
    let j = i;
    while (str[j] !== "#") {
      j++;
    }

    let length = parseInt(str.slice(i, j));
    let subStr = str.slice(j + 1, j + 1 + length);

    result.push(subStr);
    i = j + 1 + length;
  }
  return result;
}

const strings = ["we", "say", ":", "yes"];
const encodedString = encode(strings);
console.log(encodedString);

const decodedString = decode(encodedString);
console.log(decodedString);
