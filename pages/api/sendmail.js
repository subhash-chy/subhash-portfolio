import nodemailer from "nodemailer";

export default async function handler(req, res) {
  try {
    const { name, email, message } = req.body;
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_SMTP_USER,
        pass: process.env.GMAIL_SMTP_PASSWORD,
      },
    });

    const mailOptions = {
      from: `${name} <${process.env.GMAIL_SMTP_USER}>`,
      to: `${process.env.GMAIL_SMTP_USER}`,
      subject: `Message from ${name} <${email}>`,
      html: `<div>
              <p>From: ${email}</p>
              <h1>Hey Subash!</h1>
              <p><strong>${name}</strong> has messaged you from your site!</p>
              <p><strong>Message:</strong> ${message}</p>
            </div>`,
    };

    transporter.sendMail(mailOptions, (err) => {
      if (err) console.log("Cannot send a message");
      else console.log(`Message has been sent successfully!`);
    });
    return res.status(201).json({ message: "Message sent successfully!" });
  } catch (error) {
    return res.status(501).json({ message: `Something went wrong!` });
  }
}
