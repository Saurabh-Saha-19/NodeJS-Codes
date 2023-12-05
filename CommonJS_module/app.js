// Note:  Please do not change the prewritten code

// import the required module here
const math = require("./math");

const Solution = () => {
  const nums = [1, 2, 3, 4, 5];
  // write your code here to Display the results of the calculations on the console.
  const sum = math.sum(nums);

  const mean = math.mean(nums);

  console.log(`The sum is ${sum}.`);
  console.log(`The mean is ${mean}.`);
};
Solution();
module.exports = Solution;
