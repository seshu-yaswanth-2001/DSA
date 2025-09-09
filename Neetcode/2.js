// valid anagram
function validAna(s, t) {
  if (s.length !== t.length) return false;
  let countS = {};
  let countT = {};

  for (let i = 0; i < s.length; i++) {
    countS[s[i]] = (countS[s[i]] || 0) + 1;
    countT[t[i]] = (countT[t[i]] || 0) + 1;
  }

  for (const key in countS) {
    if (countS[key] !== countT[key]) {
      return false;
    }
  }
  return true;
}

console.log(validAna("racecar", "carrace"));

// two

function validAnagram(s, t) {
  return (
    s
      .replace(/[^a-zA-Z]/g, "")
      .toLowerCase()
      .split("")
      .sort()
      .join("") ===
    t
      .replace(/[^a-zA-Z]/g, "")
      .toLowerCase()
      .split("")
      .sort()
      .join("")
  );
}

console.log(validAnagram("racear", "carrace"));
