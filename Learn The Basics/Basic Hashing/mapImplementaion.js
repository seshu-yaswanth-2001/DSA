function freq(arr, queries) {
  const freqMap = new Map();

  for (let num of arr) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  for (let q of queries) {
    console.log(`Frequencies of ${q}: ${freqMap.get(q) || 0}`);
  }
}

freq([1, 2, 3, 4, 4, 1, 12, 11, 256], [23, 256, 1, 2, 3, 4, 5, 6]);
freq("Seshu", ["s", "S"]);
