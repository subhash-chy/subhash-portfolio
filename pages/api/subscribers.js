import axios from "axios";

export default async function handler(_, res) {
  const result = await axios
    .get("https://www.getrevue.co/api/v2/subscribers", {
      headers: {
        Authorization: `Token ${process.env.REVUE_API_KEY}`,
      },
    })
    .then((res) => console.log(res.ok))
    .catch((error) => console.log(error))
    .then((res) => console.log(res));

  if (!result.ok) {
    return res.status(500).json({ error: "Error retrieving subscribers" });
  }

  // res.setHeader(
  //   "Cache-Control",
  //   "public, s-maxage=1200, stale-while-revalidate=600"
  // );

  return res.status(200).json({ count: data.length });
}
