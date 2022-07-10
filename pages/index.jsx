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
        title="Subash Chaudhary."
        subtitle="A blogger, Front-End Developer, NextJS developer"
        paragraphs=" Want to learn about Front-End development? You are on the right
        place. Just go to blog section and find a tutorial that best suits
        you."
      />

      <div className="pt-20 pb-5 max-w-custom ">
        {/* Who am I section */}
        <div className="space-y-5">
          <h1>Who am I?</h1>
          <p className="">
            I am a student, mainly a tech enthusiast. I like coding, write blogs
            on various topic of programming. The main weapons are NextJS and
            TailwindCSS.
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
