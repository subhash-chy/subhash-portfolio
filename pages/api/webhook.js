export default async function handler(_, res) {
  try {
    await res.unstable_revalidate("/blog");
    return res.status(200).json({ revalidated: true });
  } catch (error) {
    return res.status(500).send("Error revalidating");
  }
}
