const userEvents = require("./userEvents");

const userEvent = new userEvents();

userEvent.createPost("This is my first post");
userEvent.addListener("postCreated", saveToDatabase);

function saveToDatabase() {
  console.log("Saving to Database");
}
