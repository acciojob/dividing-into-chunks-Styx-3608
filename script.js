const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  let result = [];
  let currentChunk = [];
  let currentSum = 0;

  for (let num of arr) {
    if (currentSum + num <= n) {
      currentChunk.push(num);
      currentSum += num;
    } else {
      if (currentChunk.length > 0) {
        result.push(currentChunk);
      }
      currentChunk = [num];
      currentSum = num;
    }
  }

  if (currentChunk.length > 0) {
    result.push(currentChunk);
  }

  return result;
};

const n = parseInt(prompt("Enter n: "), 10); // Ensure n is a number
alert(JSON.stringify(divide(arr, n)));
