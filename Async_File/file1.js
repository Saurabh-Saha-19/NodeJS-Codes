const fs = require("fs");

const exec = () => {
  fs.writeFile("employee.txt", "New Employee 1", (err) => {
    err ? console.log(err) : console.log("File created !");
  });

  fs.readFile("employee.txt", { encoding: "utf8" }, (err, data) => {
    err ? console.log(err) : console.log(data);
  });

  console.log("this is prove the async nature");
};

exec();
