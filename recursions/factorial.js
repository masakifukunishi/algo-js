function findFactorialRecursive(number) {
  if (number === 2) {
    return 2;
  } else {
    return number * findFactorialRecursive(number - 1);
  }
}

function findFactorialIterative(number) {
  let answer = 1;
  for (let i = 2; i < number; i++) {
    answer = answer * i;
  }
  return answer;
}

console.log(findFactorialRecursive(5));
