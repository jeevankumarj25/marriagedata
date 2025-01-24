const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "your-email@gmail.com",
    pass: "your-email-password",
  },
});

app.post("/api/send-email", (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: "your-email@gmail.com",
    to: "jeevankumarj25@gmail.com",
    subject: "New Form Submission",
    text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).send("Error sending email.");
    }
    console.log("Email sent: " + info.response);
    return res.status(200).send("Email sent successfully.");
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
