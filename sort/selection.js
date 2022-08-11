const selectionSort = (numbers) => {
  for (let i = 0; i < numbers.length; i++) {
    let minIdx = i;
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[minIdx] > numbers[j]) {
        minIdx = j;
      }
    }
    [numbers[i], numbers[minIdx]] = [numbers[minIdx], numbers[i]];
  }
  return numbers;
};

const nums = [...Array(20).keys()].map(() => Math.floor(Math.random() * 100));
console.log(selectionSort(nums));
