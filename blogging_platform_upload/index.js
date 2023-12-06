// Write your code here
import path from "path";
import { stdin, stdout } from "process";
import readline from "readline";
import { writeBlog, publishBlog } from "./blogActions.js";

const Solution = () => {
  const filePath = path.resolve("src", "myblog.txt");

  const interf = readline.createInterface({
    input: stdin,
    output: stdout,
  });

  interf.question("Enter your blog: ", (blog) => {
    writeBlog(filePath, blog);
    console.log(publishBlog(filePath));
  });
};

Solution();

export default Solution;
