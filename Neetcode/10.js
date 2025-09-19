function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    while (left < right && !/^[a-z0-9]$/i.test(str[left])) left++;
    while (left < right && !/^[a-z0-9]$/i.test(str[right])) right--;
    if (str[left].toLowerCase() === str[right].toLowerCase()) {
      left++;
      right--;
    } else {
      return false;
    }
  }
  return true;
}

const str = "Was it a car or a cat I saw?";
console.log(isPalindrome(str));
