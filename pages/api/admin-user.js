import Iron from "@hapi/iron";
import { getAuthToken } from "../../lib/cookie";

export default async function handler(req, res) {
  try {
    const user = await Iron.unseal(
      getAuthToken(req.cookies),
      process.env.MAGIC_ENCRYPTION_SECRET,
      Iron.defaults
    );
    return res.json(user);
  } catch (error) {
    res.status(401).end();
  }
}
