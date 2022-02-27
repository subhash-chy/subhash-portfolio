export default async function handler(req, res) {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  const result = await fetch("https://www.getrevue.co/api/v2/subscribers", {
    method: "POST",
    headers: {
      Authorization: `Token ${process.env.REVUE_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email, double_opt_in: false }),
  });
  const data = await result.json();
  console.log(data);

  if (!result.ok) {
    console.log("Result =>", result);
    return res.status(500).json({ error: "data.error.email[0]" });
  }

  return res.status(201).json({ error: "", message: "hurry success" });
}
