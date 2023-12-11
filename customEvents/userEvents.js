const events = require("events");

class userEvents extends events.EventEmitter {
  //events
  createPost(content) {
    console.log("Post is created!");
    this.emit("postCreated");
  }
}

module.exports = userEvents;
