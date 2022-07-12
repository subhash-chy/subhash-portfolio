import { Magic } from "@magic-sdk/admin";
import Iron from "@hapi/iron";
import { setTokenCookie } from "../../lib/cookie";

export default async function handler(req, res) {
  try {
    if (req.method !== "POST") return res.status(405).end();

    // exchange the did from Magic for some user data
    const did = req.headers.authorization.split("Bearer").pop().trim();
    const user = await new Magic(
      process.env.MAGIC_SECRET_KEY
    ).users.getMetadataByToken(did);

    // Author a couple of cookies to persist a user's session
    const token = await Iron.seal(
      user,
      process.env.MAGIC_ENCRYPTION_SECRET,
      Iron.defaults
    );
    setTokenCookie(res, token);

    res.end();
  } catch (error) {
    console.log("Error => ", error);
  }
}
