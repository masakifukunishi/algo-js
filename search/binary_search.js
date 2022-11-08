const binarySearch = (numbers, value) => {
  let [left, right] = [0, numbers.length - 1];
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (numbers[mid] === value) {
      return mid;
    } else if (numbers[mid] < value) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
};

const nums = [1, 2, 5, 6, 7, 9];
console.log(binarySearch(nums, 1));
