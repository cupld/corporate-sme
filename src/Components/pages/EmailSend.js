const { https } = require("firebase-functions");
const { createTransport } = require("nodemailer");

const sender = "thedashti84@gmail.com";
const password = "Ahmed@1984";
const recipient = "thedashti84@gmail.com";

const transporter = createTransport({
  service: "gmail",
  auth: {
    user: sender,
    pass: password,
  },
});

const mailOptions = ({ subject, name, message }) => {
  const text = `
    Name: ${name}
    Message: ${message}
    `;

  const html = `
    <h1>Name: ${name}</h1>
    <p>Message: ${message}</p>
    `;

  return {
    from: sender,
    to: recipient,
    subject,
    text,
    html,
  };
};

const transport = (error, { messageId }) =>
  error ? console.log(error) : console.log(messageId);

const handleEmail = (req, res) => {
  transporter.sendMail(mailOptions, transport);
  res.send({ status: 200 });
};

module.exports = https.onRequest(handleEmail);
