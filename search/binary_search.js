// const binarySearch = (numbers, value) => {
//   let [left, right] = [0, numbers.length - 1];
//   while (left <= right) {
//     const mid = Math.floor((left + right) / 2);
//     if (numbers[mid] === value) {
//       return mid;
//     } else if (numbers[mid] < value) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }
//   }
//   return -1;
// };

const binarySearch = (numbers, value) => {
  const _binarySearch = (numbers, value, left, right) => {
    if (left > right) {
      return -1;
    }
    const mid = Math.floor((left + right) / 2);
    if (numbers[mid] === value) {
      return mid;
    } else if (numbers[mid] < value) {
      return _binarySearch(numbers, value, mid + 1, right);
    } else {
      return _binarySearch(numbers, value, left, mid - 1);
    }
  };
  return _binarySearch(numbers, value, 0, numbers.length - 1);
};
const nums = [1, 2, 5, 6, 7, 9];
console.log(binarySearch(nums, 7));
