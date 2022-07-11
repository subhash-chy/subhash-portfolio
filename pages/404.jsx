import React from "react";
import { Header } from "../components";
import { Layout } from "../layouts";
import { useRouter } from "next/router";

function NotFound() {
  const router = useRouter(null);
  return (
    <Layout>
      <Header
        title="Oops! The page you requested cannot be found! - 404"
        paragraphs="I think you found the link that used to exist. You are in this page
        because that link has been removed completely or moved to another
        link. Or this link doesn't exist."
        button={{
          title: "Back To Home",
          highEmphasis: true,
          onClick: () => router.push("/"),
        }}
      />
    </Layout>
  );
}

export default NotFound;
