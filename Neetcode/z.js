function merge(arr1, arr2) {
  let filterArr = [...arr1, ...arr2];
  const count = {};

  for (let item of filterArr) {
    count[item.id] = (count[item.id] || 0) + 1;
  }

  return count;
}

const arr1 = [
  { id: 1, name: "Rama" },
  { id: 2, name: "Deepika" },
];

const arr2 = [
  { id: 2, name: "Seshu" },
  { id: 4, name: "Sravana" },
];

console.log(merge(arr1, arr2));
