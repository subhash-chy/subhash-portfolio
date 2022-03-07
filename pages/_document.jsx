import { Html, Head, Main, NextScript } from "next/document";

function Document(props) {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="preload"
          href="/fonts/Poppins-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        <meta
          name="google-site-verification"
          content=" V8plfmHs6tIBpKivorNTMKn-zQH6sknk8LdwAqsjjDU"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
