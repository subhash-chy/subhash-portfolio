import { Button, FeaturedPosts, Header, Newsletter } from "../components";
import { Layout } from "../layouts";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();
  // router.
  return (
    <Layout>
      <Header
        image
        title="Subhash Chaudhary."
        subtitle="- Front-End Developer (ReactJS)"
      />

      <div className="pt-20 pb-5 max-w-custom ">
        {/* Who am I section */}
        <div className="space-y-5">
          <h1>Front-End Developer & Blogger</h1>
          <p className="">
          Unleash the power of design and code on my personal platform. I'm Subhash Chaudhary, a front-end developer sharing insights, trends, and my portfolio. Dive into the dynamic intersection of creativity and technology—where every line of code tells a story. Let's build the web of tomorrow together.
          </p>
          <Button
            onClick={() => {
              router.push("/about");
            }}
          >
            Know More
          </Button>
        </div>

        {/* Featured blog post section */}
        <FeaturedPosts />
      </div>
      {/* Subscribe Newsletter */}
      <div className="pb-20 sm:max-w-custom">
        <Newsletter />
      </div>
    </Layout>
  );
};

export default Home;
