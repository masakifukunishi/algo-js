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

nums = [2, 1, 5, 3, 4, 8, 12, 7];
console.log(bubbleSort(nums));
