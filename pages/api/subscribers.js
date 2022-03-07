import mailchimp from "@mailchimp/mailchimp_marketing";

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_API_SERVER, // e.g. us1
});

export default async function handler(_, res) {
  try {
    const response = await mailchimp.lists.getList(
      process.env.MAILCHIMP_AUDIENCE_ID
    );
    res.setHeader(
      "Cache-Control",
      "public, s-maxage=1200, stale-while-revalidate=600"
    );

    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ error: "Internal server error!" });
  }
}
