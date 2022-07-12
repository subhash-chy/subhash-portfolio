import { useRef, useState } from "react";
import { Button, Header } from "../components";
import { Layout } from "../layouts";
import { useRouter } from "next/router";
import { Magic } from "magic-sdk";
// import Head from "next/head";
import { getAuthToken } from "../lib/cookie";
import { parse } from "cookie";

export const getServerSideProps = async ({ req, res }) => {
  const cookies = parse(req.headers.cookie || "");
  const token = getAuthToken(cookies);

  if (token) {
    res.writeHead(303, { location: "/admin-dashboard" });
    res.end();
  }

  return { props: {} };
};

function Admin() {
  const emailRef = useRef(null);

  const router = useRouter(null);

  const [loading, setLoading] = useState(false);

  const loginAdmin = async (e) => {
    e.preventDefault();

    setLoading(true);
    // the Magic code
    const did = await new Magic(
      process.env.NEXT_PUBLIC_MAGIC_PUB_KEY
    ).auth.loginWithMagicLink({
      email: emailRef.current.value,
      // redirectURI:
      //   process.env.NODE_ENV == "production"
      //     ? "https://chaudharysubash.com.np/admin-dashboard"
      //     : "http://localhost:3000/admin-dashboard",
    });
    setLoading(false);

    // Once we have the did from magic, login with our own API
    const authRequest = await fetch("/api/admin-login", {
      method: "POST",
      headers: { Authorization: `Bearer ${did}` },
    });

    if (authRequest.ok) {
      router.push("/admin-dashboard");
    } else {
      console.log("Something is wrong!");
    }
  };

  return (
    <Layout>
      <Header
        title="Admin Login"
        paragraphs="This page is only for website owner. If you are not a website owner, this page is of no use. So, go back to home page and explore other pages!"
        button={{
          title: "Back To Home",
          highEmphasis: true,
          onClick: () => router.push("/"),
        }}
      />
      <div className="py-20 max-w-custom space-y-20">
        <div className="space-y-5">
          <form className="space-y-8" onSubmit={loginAdmin}>
            <div className="space-y-2">
              <label htmlFor="email">Admin Email</label>
              <input
                ref={emailRef}
                className="input-custom bg-[#f3f3f3] focus:bg-[#eeeeee]"
                type="email"
                name="email"
                placeholder="steve@gmail.com"
                required
              />
            </div>

            <div className="flex">
              <Button highEmphasis loading={loading}>
                LOGIN
              </Button>
              <p></p>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default Admin;
