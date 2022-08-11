const bubbleSort = (numbers) => {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length - 1 - i; j++) {
      if (numbers[j] > numbers[j + 1]) {
        [numbers[j], numbers[j + 1]] = [numbers[j + 1], numbers[j]];
      }
    }
  }
  return numbers;
};

const nums = [...Array(20).keys()].map(() => Math.floor(Math.random() * 100));
console.log(bubbleSort(nums));
