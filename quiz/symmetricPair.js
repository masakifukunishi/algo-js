const findPair = function* (pairs) {
  let cashe = {};
  for (var pair of pairs) {
    let [first, second] = [pair[0], pair[1]];
    const value = cashe[second];
    if (!value) {
      cashe[first] = second;
    } else if (value === first) {
      yield pair;
    }
  }
};

const input = [
  [1, 2],
  [3, 5],
  [4, 7],
  [5, 3],
  [7, 4],
];

const res = findPair(input);
for (v of res) {
  console.log(v);
}
