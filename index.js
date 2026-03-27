function sum(a, b) {
  return a + b;
}

function reverseString(str) {
  return str.split('').reverse().join('');
}

function findLargest(numbers) {
  if (numbers.length === 0) return null;

  let largest = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      largest = numbers[i];
    }
  }
  return largest;
}

function isPalindrome(str) {
  const lower = str.toLowerCase();
  let reversed = '';

  for (let i = lower.length - 1; i >= 0; i--) {
    reversed += lower[i];
  }

  return lower === reversed;
}

function filterEvenNumbers(numbers) {
  const result = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      result.push(numbers[i]);
    }
  }

  return result;
}

module.exports = {
  sum,
  reverseString,
  findLargest,
  isPalindrome,
  filterEvenNumbers,
};

