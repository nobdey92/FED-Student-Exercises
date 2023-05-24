const numbers = [1, 2, 3, [4, 5, 6, [7, 8, 9]], 4, 5, 6];

const flatten = (values) =>
  values.reduce(
    (acc, item, index, array) =>
      acc.concat(Array.isArray(item) ? flatten(item) : item),
    []
  );

const largestNumber = (values) => {
  let highest = 0;
  for (let i = 0; i < values.length; i += 1) {
    if (values[i] > highest) {
      highest = values[i];
    }
  }
  return highest;
};

console.log(largestNumber(flatten(numbers)));
