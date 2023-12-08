// Please don't change the pre-written code
// Import the necessary modules here
import nodemailer from "nodemailer";
import readline from "readline";

const Solution = () => {
  // Write your code here
  const inf = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  inf.question("please enter you email: ", (email) => {
    //configuring email
    sendMail(email);

    inf.close();
  });
};

async function sendMail(email) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "codingninjas2k16@gmail.com",
      pass: "slwvvlczduktvhdj",
    },
  });

  const mailOptions = {
    from: "codingninjas2k16@gmail.com",
    to: email,
    subject: "Coding Ninjas",
    text: "The world has enough coders; be a coding ninja!",
  };

  try {
    const result = await transporter.sendMail(mailOptions);
    console.log(`Success: Email sent to ${email}`);
  } catch (err) {
    console.log(err);
  }
}

export default Solution;
