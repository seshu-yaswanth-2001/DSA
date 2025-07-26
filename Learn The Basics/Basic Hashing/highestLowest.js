function highestLowest(strs, queries) {
  const freqMap = new Map();

  for (let item of strs) {
    freqMap.set(item, (freqMap.get(item) || 0) + 1);
  }

  const freqs = [...freqMap.values()];
  const min = Math.min(...freqs);
  const max = Math.max(...freqs);

  for (let q of queries) {
    const freq = freqMap.get(q) || 0;
    if (freq === undefined) {
      console.log(`'${q}': Not present (frequency = 0)`);
    } else if (freq === max) {
      console.log(`${q} Highest Frequency with ${max}`);
    } else if (freq === min) {
      console.log(`${q} Lowest Frequecy with ${min}`);
    } else {
      console.log(`${q} Frequency with ${freq}`);
    }
  }
}

highestLowest("seshu", ["s", "e", "h", "u", "k"]);

function highestAndLowest(str) {
  const freqMap = new Map();

  // Count frequencies
  for (let ch of str) {
    freqMap.set(ch, (freqMap.get(ch) || 0) + 1);
  }

  // Find min and max frequencies
  let minFreq = Infinity;
  let maxFreq = -Infinity;

  for (let freq of freqMap.values()) {
    if (freq < minFreq) minFreq = freq;
    if (freq > maxFreq) maxFreq = freq;
  }

  // Collect characters with min and max frequencies
  const lowest = [];
  const highest = [];

  for (let [ch, freq] of freqMap.entries()) {
    if (freq === minFreq) lowest.push(ch);
    if (freq === maxFreq) highest.push(ch);
  }

  console.log(`Highest Frequency (${maxFreq}): ${highest.join(", ")}`);
  console.log(`Lowest Frequency (${minFreq}): ${lowest.join(", ")}`);
}

highestAndLowest("Seshu yaswanth Reddy");
