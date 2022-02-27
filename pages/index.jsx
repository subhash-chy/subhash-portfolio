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

      <div className="py-20 max-w-custom ">
        {/* Who am I section */}
        <div className="space-y-5">
          <h1>Who am I?</h1>
          <p className="">
            I am a student, mainly a tech enthusiast. I like coding, write blogs
            on various topic of programming. The main weapons are NextJS and
            TailwindCSS.
          </p>
          <Button
            title="Know More"
            onClick={() => {
              router.push("/about");
            }}
          />
        </div>

        {/* Featured blog post section */}
        <FeaturedPosts />

        {/* Subscribe Newsletter */}
        <Newsletter />
      </div>
    </Layout>
  );
};

export default Home;
