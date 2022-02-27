import Head from "next/head";
import { Footer, Navbar } from "../components";
import { useRouter } from "next/router";

function Layout(props) {
  const router = useRouter();
  const { children, ...customMetaData } = props;

  const metaData = {
    title: "Subash Chaudhary - Blogger, Front-End developer.",
    description: `Front-end developer, JavaScript enthusiast, and course creator.`,
    image: "/profile-pic.png",
    type: "website",
    ...customMetaData,
  };
  return (
    <>
      <Head>
        <title>{metaData.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={metaData.description} name="description" />
        <meta
          property="og:url"
          content={`https://www.chaudharysubash.com.np${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://www.chaudharysubash.com.np${router.asPath}`}
        />
        <meta property="og:type" content={metaData.type} />
        <meta property="og:site_name" content="Subash Chaudhary" />
        <meta property="og:description" content={metaData.description} />
        <meta property="og:title" content={metaData.title} />
        <meta property="og:image" content={metaData.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@subash" />
        <meta name="twitter:title" content={metaData.title} />
        <meta name="twitter:description" content={metaData.description} />
        <meta name="twitter:image" content={metaData.image} />
        {metaData.date && (
          <meta property="article:published_time" content={metaData.date} />
        )}
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
