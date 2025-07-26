function alpha(strs, queries) {
  const hash = new Array(26).fill(0);

  for (let i = 0; i < strs.length; i++) {
    const index = strs[i].charCodeAt(0) - "a".charCodeAt(0);
    hash[index] += 1;
  }

  for (let i = 0; i < queries.length; i++) {
    const index = queries[i].charCodeAt(0) - "a".charCodeAt(0);
    console.log(`Frequencies of ${queries[i]}:  ${hash[index]}`);
  }
}

alpha("sesssssssseshu", ["s", "e", "h", "u"]);

// for all chars
console.log("For All Chars");

function allChars(strs, queries) {
  const hash = new Array(256).fill(0);

  for (let i = 0; i < strs.length; i++) {
    const index = strs[i].charCodeAt(0);
    hash[index] += 1;
  }

  for (let i = 0; i < queries.length; i++) {
    const index = queries[i].charCodeAt(0);
    console.log(`Frequencies of ${queries[i]}: ${hash[index]}`);
  }
}

allChars("deepikAa", ["d", "e", "p", "i", "k", "a", "A"]);

// with Map

console.log("from map");

function alphaMap(strs, queries) {
  const maps = new Map();

  for (let item of strs) {
    maps.set(item, (maps.get(item) || 0) + 1);
  }

  for (let q of queries) {
    console.log(`Frequencies of ${q}: ${maps.get(q) || 0}`);
  }
}

alphaMap("RamA", ["r", "R", "a", "A", "m", "M", "A", "a"]);
