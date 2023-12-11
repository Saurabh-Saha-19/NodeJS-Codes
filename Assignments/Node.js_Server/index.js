import http from "http";
import fs from "fs";
import EventEmitter from "events";
import nodemailer from "nodemailer";

class CustomEvent extends EventEmitter {
  mailSent(email) {
    this.emit("mailSent", email);
  }
}

const customEvent = new CustomEvent();

const server = http.createServer((req, res) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "codingninjas2k16@gmail.com",
      pass: "slwvvlczduktvhdj",
    },
  });

  if (req.method === "POST") {
    let data = "";

    req.on("data", (chunk) => {
      data += chunk;
    });

    req.on("end", () => {
      const { name, email, message } = JSON.parse(data);

      // TODO: Store user query in "query.txt"
      fs.appendFile(
        "queries.txt",
        `Name: ${name} \nEmail: ${email} \nQuery: ${message} `,
        (err) => {
          err ? console.log(err) : console.log("Query appended successfully!");
        }
      );
      // TODO: Use Nodemailer to send confirmation email
      const mailOptions = {
        from: "codingninjas2k16@gmail.com",
        to: email,
        subject: "Query Received",
        text: "We have received you query and will get back to you soon!",
      };

      const result = transporter.sendMail(mailOptions);
      result.then(() => {
        customEvent.mailSent(email);
      });
      // TODO: Emit "mailSent" event

      res.end("Query received");
    });
  } else {
    res.end("Welcome to Coding Ninjas!");
  }
});

const Solution = () => {
  customEvent.addListener("mailSent", (email) => {
    console.log(`custom event "mailSent" emitted`);
    console.log(
      `confirming that the email has been sent successfully to ${email}`
    );
  });
};

export default server;
export { server, CustomEvent, Solution };
