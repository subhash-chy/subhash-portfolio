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
      from: `${name ? name : "Subhash"} <${email}>`,
      to: `${name ? process.env.GMAIL_SMTP_USER : email}`,
      subject: `${
        name
          ? "Message from ".concat(name)
          : "Hey folks! A new message from subhash newsletter!"
      }`,
      html: `<div>
              <p>${name ? "From: <b><i>".concat(email) : ""}  </i><b/></p>
              <h1>${
                name ? "Hey Subhash!" : "Hey Guys! A new message for you!"
              }</h1>
              <p>${
                name ? name.concat(" has messaged you from your site!") : ""
              }</p>
              <p><strong>Message:</strong> ${message}</p>
            </div>`,
    };

    await new Promise((resolve, reject) => {
      transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
          console.log("Cannot send a message");
          reject(err);
          return res.status(501).json({ message: `Error: ${err}` });
        } else {
          console.log(`Message has been sent successfully!`);
          resolve(info);
          return res
            .status(201)
            .json({ message: "Message sent successfully!" });
        }
      });
    });
  } catch (error) {
    return res.status(501).json({ message: `Something went wrong!` });
  }
}
