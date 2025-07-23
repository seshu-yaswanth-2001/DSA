// check whether a string is palindrome or not
function palindrome(str, i) {
  if (i >= str.length / 2) return true;
  if (str[i] !== str[str.length - i - 1]) return false;
  return palindrome(str, i + 1);
}

console.log(palindrome("madam", 0));

// cleaner
function isPalindrome(str) {
  function check(i) {
    if (i >= str.length / 2) return true;
    if (str[i] !== str[str.length - i - 1]) return false;
    return check(i + 1);
  }
  return check(0);
}

console.log(isPalindrome("madam"));
console.log(isPalindrome("madsm"));
