// check given str is having valid Parentheses
function validParentheses(str) {
  const stack = [];
  const pairs = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let char of str) {
    if (pairs[char]) {
      stack.push(pairs[char]);
    } else if (stack.pop() !== char) return false;
  }

  return stack.length === 0;
}

console.log(validParentheses("([)]"));
console.log(validParentheses("[]"));
