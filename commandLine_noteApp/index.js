// Please don't change the pre-written code
// Import the necessary modules here
const fs = require("fs");

const Solution = () => {
  // Write your code here
  try {
    fs.writeFileSync("notes.txt", "The world has enough coders ");
    let data = fs.readFileSync("notes.txt", { encoding: "utf8" });
    console.log(data);
    fs.appendFileSync("notes.txt", "BE A CODING NINJA!");
    data = fs.readFileSync("notes.txt", { encoding: "utf8" });
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};
Solution();
module.exports = Solution;
