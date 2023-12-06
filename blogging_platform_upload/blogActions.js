// Write your code here
import fs from "fs";

const writeBlog = (filePath, blog) => {
  try {
    fs.appendFileSync(filePath, blog);
  } catch (err) {
    console.log(err);
  }
};

const publishBlog = (filePath) => {
  try {
    const blog = fs.readFileSync(filePath, { encoding: "utf8" });
    return blog;
    //console.log(blog);
  } catch (err) {
    console.log(err);
  }
};

export { writeBlog, publishBlog };
