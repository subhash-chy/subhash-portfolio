const nodemailer = require("nodemailer");
const { google } = require("googleapis");
export default async function handler(req, res) {
  const { name, email, message } = req.body;
  // Getting all the tokens
  const CLIENT_ID = process.env.GMAIL_API_CLIENT_ID;
  const CLIENT_SECRET = process.env.GMAIL_API_CLIENT_SECRET;
  const REDIRECT_URI = process.env.GMAIL_API_REDIRECT_URI;
  const REFRESH_TOKEN = process.env.GMAIL_API_REFRESH_TOKEN;

  const oAuth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
  );
  oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

  if (!name || !email || !message)
    return res.status(411).json({ message: "Payload not provided!" });
  //   async function sendmail() {
  try {
    const accessToken = await oAuth2Client.getAccessToken();
    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "chaudharysubash55259807@gmail.com",
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });

    const mailOptions = {
      from: "Subash <chaudharysubash55259807@gmail.com>",
      to: "imchy.rahul@gmail.com",
      subject: `${name}(${email}) contacted you from your site`,
      text: message,
      html: `<p>${message}</p>`,
    };

    const result = await transport.sendMail(mailOptions);
    //   return result;
    return res.status(201).json({ message: "Message sent successfully!" });
  } catch (error) {
    return res.status(501).json({ message: error });
  }
  //   }

  //   sendmail()
  //     .then((result) => {
  //       return res.status(201).json({ message: "Message sent successfully!" });
  //     })
  //     .catch((error) =>
  //       res.status(501).json({ message: `Something went wrong!`, error })
  //     );
}
