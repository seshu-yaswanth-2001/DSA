// contains Duplicates

function hasDuplicates(nums) {
  const unique = new Set(nums);
  const uniqueLen = [...unique].length;
  if (uniqueLen !== nums.length) {
    return true;
  } else {
    return false;
  }
}

hasDuplicates([1, 2, 3, 4, 5, 6, 6, 7, 8, 8, 9]);
