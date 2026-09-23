import Head from "next/head";
import { Footer, Navbar } from "../components";
import { useRouter } from "next/router";

const SITE_URL = "https://www.chaudharysubash.com.np";

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
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="follow, index" />
        <meta content={metaData.description} name="description" />
        <meta property="og:url" content={`${SITE_URL}${router.asPath}`} />
        <link rel="canonical" href={`${SITE_URL}${router.asPath}`} />
        <meta property="og:type" content={metaData.type} />
        <meta property="og:site_name" content="Subash Chaudhary" />
        <meta property="og:description" content={metaData.description} />
        <meta property="og:title" content={metaData.title} />
        <meta
          property="og:image"
          content={
            metaData.image.startsWith("http")
              ? metaData.image
              : `${SITE_URL}${metaData.image}`
          }
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@subash" />
        <meta name="twitter:title" content={metaData.title} />
        <meta name="twitter:description" content={metaData.description} />
        <meta
          name="twitter:image"
          content={
            metaData.image.startsWith("http")
              ? metaData.image
              : `${SITE_URL}${metaData.image}`
          }
        />
        {metaData.date && (
          <meta property="article:published_time" content={metaData.date} />
        )}
      </Head>
      <div className="flex min-h-screen flex-col">
        <a href="#main-content" className="skip-nav">
          Skip to content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
