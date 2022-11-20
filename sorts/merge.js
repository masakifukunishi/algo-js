const mergeSort = (numbers) => {
  if (numbers.length <= 1) {
    return numbers;
  }
  const center = Math.floor(numbers.length / 2);
  const left = numbers.slice(0, center);
  const right = numbers.slice(center);

  mergeSort(left);
  mergeSort(right);

  let [i, j, k] = [0, 0, 0];
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      numbers[k] = left[i];
      i += 1;
    } else {
      numbers[k] = right[j];
      j += 1;
    }
    k += 1;
  }
  while (i < left.length) {
    numbers[k] = left[i];
    i += 1;
    k += 1;
  }
  while (j < right.length) {
    numbers[k] = right[j];
    j += 1;
    k += 1;
  }
  return numbers;
};

const nums = [5, 3, 2, 4, 6, 1, 23, 12];
console.log(mergeSort(nums));
