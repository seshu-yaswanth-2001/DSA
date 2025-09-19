// merge two sorted arrays

function merge(arr1, arr2) {
  const n1 = arr1.length;
  const n2 = arr2.length;

  let f1 = 0;
  let f2 = 0;
  let res = [];
  while (f1 < n1 && f2 < n2) {
    if (arr1[f1] <= arr2[f2]) {
      res.push(arr1[f1]);
      f1++;
    } else {
      res.push(arr2[f2]);
      f2++;
    }
  }
  while (f1 < n1) {
    res.push(arr1[f1]);
    f1++;
  }
  while (f2 < n2) {
    res.push(arr2[f2]);
    f2++;
  }

  return res;
}

const arr1 = [1, 2, 3],
  arr2 = [2, 5, 6];

console.log(merge(arr1, arr2));
