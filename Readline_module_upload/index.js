// Import required module
const readline = require("readline");

const Solution = () => {
  // Write your code here
  const inter = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  inter.question("Enter the first number: ", (num1) => {
    inter.question("Enter the second number: ", (num2) => {
      const ans = Number(num1) > Number(num2) ? Number(num1) : Number(num2);
      console.log("The maximum of two numbers is: ", ans);
    });
  });
};

Solution();
module.exports = Solution;
