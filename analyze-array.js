function analyzeArray(arr) {
  let obj = {};

  arr = arr.sort((a, b) => a - b);

  console.log(arr);

  obj.average = arr[Math.ceil(arr.length / 2) - 1];

  obj.min = arr[0];

  obj.max = arr[arr.length - 1];

  obj.length = arr.length;

  return obj;
}

module.exports = analyzeArray;
