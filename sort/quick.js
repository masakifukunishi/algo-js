const partition = (numbers, low, high) => {
  let i = low - 1;
  pivot = numbers[high];
  for (let j = low; j < high; j++) {
    if (numbers[j] <= pivot) {
      i += 1;
      [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }
  }
  [numbers[i + 1], numbers[high]] = [numbers[high], numbers[i + 1]];
  return i + 1;
};

const quickSort = (numbers) => {
  const _quickSort = (numbers, low, high) => {
    if (low < high) {
      const partitionIndex = partition(numbers, low, high);
      _quickSort(numbers, low, partitionIndex - 1);
      _quickSort(numbers, partitionIndex + 1, high);
    }
  };
  _quickSort(numbers, 0, numbers.length - 1);
  return numbers;
};

nums = [...Array(20).keys()].map(() => Math.floor(Math.random() * 100));
console.log(quickSort(nums));
