import { Button, Header } from "../components";
import { Layout } from "../layouts";
import { about_datas } from "../data";
import { useRouter } from "next/router";

function About() {
  const router = useRouter();
  return (
    <Layout
      title="About - Subash Chaudhary"
      description="I write Front-End codes, prototype a Figma design, write backend codes, and even write some blogs."
    >
      <Header
        title="About Me"
        paragraphs="I am a developer. I write Front-End codes, prototype a Figma design, and I also write some programming related blogs."
        button={{
          title: "Read Blogs",
          onClick: () => {
            router.push("/blog");
          },
        }}
      />
      <div className="py-20 max-w-custom space-y-10">
        {/* Mapping all about page data */}
        {about_datas.map((data, index) => (
          <div key={index} className="space-y-5">
            <h1>{data.title}</h1>

            {/* Again mapping from arrays of sub data i.e. array of description */}
            {data.description.map((description, i) => (
              <p key={i}>{description}</p>
            ))}

            {/* Show if there is any button */}
            {data.button && (
              <Button title={data.button.title} onClick={data.button.onClick} />
            )}
          </div>
        ))}
      </div>
    </Layout>
  );
}

export default About;
