export default async function handler(_, res) {
  try {
    const server = process.env.MAILCHIMP_API_SERVER;
    const id = process.env.MAILCHIMP_AUDIENCE_ID;

    const members = await fetch(
      `https://${server}.api.mailchimp.com/3.0/lists/${id}/members`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.MAILCHIMP_API_KEY}`,
        },
        method: "GET",
      }
    );

    const response = await members.json();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ error: "Internal server error!" });
  }
}
