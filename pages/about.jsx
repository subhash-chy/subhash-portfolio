import { Button, ChipIcon, Header } from "../components";
import { Layout } from "../layouts";
import { useRouter } from "next/router";

function About() {
  const router = useRouter();
  return (
    <Layout
      title="About - Subhash Chaudhary"
      description="I write Front-End codes, prototype a Figma design, write backend codes, and even write some blogs."
    >
      <Header
        title="About Me"
        paragraphs="A dedicated front-end developer and avid blogger. With a passion for crafting seamless user experiences through code, I specialize in front-end development. Explore my insightful blogs and innovative web projects as we journey through the digital landscape together."
        button={{
          title: "Read Blogs",
          onClick: () => {
            router.push("/blog");
          },
        }}
      />
      <div className="py-20 max-w-custom flex flex-col gap-12">
        <div className="space-y-5">
          <h1>More Than A Developer</h1>
          <p>
            I am a student, mainly a tech enthusiast. I like coding, write blogs
            on various topic of programming. The main weapons are NextJS and
            TailwindCSS. Explore my skills,
          </p>

          <div className="flex flex-wrap gap-2">
            <ChipIcon
              link="https://nextjs.org/"
              width="70"
              height="30"
              label="Nextjs icon"
              iconPath="/sprite.svg#nextjs"
            />
            <ChipIcon
              link="https://react.dev"
              width="30"
              height="30"
              label="Reactjs icon"
              iconPath="/sprite.svg#reactjs"
            />
            <ChipIcon
              link="https://tailwindcss.com/"
              width="100"
              height="19"
              label="Tailwindcss icon"
              iconPath="/sprite.svg#tailwindcss"
            />
            <ChipIcon
              link="https://www.markdownguide.org/"
              width="30"
              height="30"
              label="Markdown icon"
              iconPath="/sprite.svg#markdown"
            />
          </div>
        </div>

        <div className="space-y-5">
          <h1>How My Journey Started</h1>
          <div className="space-y-3">
            <p>
              My journey into front-end development was a deliberate shift
              driven by a pursuit of efficient creativity.
            </p>
            <p>
              Originally drawn to 3D design with Blender, I found its resource
              demands cumbersome. Switching to mobile app development using
              Flutter provided relief, yet I craved more. Enter React and
              NextJS, where I delved into Static Site Generation, Server Side
              Rendering, and Incremental Static Regeneration for a refined
              development experience.
            </p>
            <p>
              If you're unfamiliar with SSG, SSR, and ISR, let's explore
              together
            </p>
          </div>
        </div>
        <div>
          <Button
            onClick={() => {
              window.open(
                "https://nextjs.org/docs/basic-features/data-fetching/overview",
                "_blank",
                "noopener noreferrer"
              );
            }}
          >
            Know More
          </Button>
        </div>
      </div>
    </Layout>
  );
}

export default About;
