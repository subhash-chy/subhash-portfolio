export default async function handler(_, res) {
  try {
    const server = process.env.MAILCHIMP_API_SERVER;
    const id = process.env.MAILCHIMP_AUDIENCE_ID;
    const apiKey = process.env.MAILCHIMP_API_KEY;

    // Degrade gracefully when the newsletter is not configured — keeps the
    // UI healthy and avoids error noise in the console.
    if (!server || !id || !apiKey) {
      return res.status(200).json({ total_items: 0, members: [] });
    }

    const members = await fetch(
      `https://${server}.api.mailchimp.com/3.0/lists/${id}/members`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
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
