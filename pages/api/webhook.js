export default async function handler(req, res) {
  // Check for secret to confirm this is a valid request
  if (req.query.secret !== process.env.GRAPHCMS_WEBHOOK_TOKEN) {
    return res.status(401).json({ message: "Invalid token" });
  }

  try {
    // Revalidate page when calling /webhook api
    await res.unstable_revalidate("/blog");
    return res.status(200).json({ revalidated: true });
  } catch (error) {
    return res.status(500).send("Error revalidating");
  }
}
