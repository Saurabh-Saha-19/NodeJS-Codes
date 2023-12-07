// Importing nodemailer

const nodemailer = require("nodemailer");

//configure email

function sendMail() {
  //1. create an email transport
  //using SMTP

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "bhukkad.dhaba404@gmail.com",
      pass: "nfqlzlcpkpseetdy",
    },
  });

  const mailOptions = {
    from: "bhukkad.dhaba404@gmail.com",
    to: "vksaha99340@gmail.com",
    subject: "This is subject of the mail",
    text: "Some text to send in the mail",
  };

  const result = transporter.sendMail(mailOptions);

  result
    .then(() => {
      console.log("mail sent successfully !");
    })
    .catch((err) => console.log(err));
}

sendMail();
