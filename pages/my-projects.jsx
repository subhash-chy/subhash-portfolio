import React from "react";
import { Header, Roadmap } from "../components";
import { my_projects_data } from "../data";
import { Layout } from "../layouts";

function MyProjects() {
  return (
    <Layout
      title="Projects - Subash Chaudhary"
      description="The following are the projects that I have created. Please be free to check them out on my Github."
    >
      <Header
        title="My Projects"
        paragraphs="The following are the projects that I have created. The link to those projects will be available soon. Thanks for visiting my site."
        button={{
          title: "View On Github",
          onClick: () => {
            window.open(
              "https://github.com/Suubash",
              "_blank",
              "noopener noreferrer"
            );
          },
        }}
      />
      <div className="py-20 max-w-custom space-y-10 md:space-y-20">
        <Roadmap data={my_projects_data} />
      </div>
    </Layout>
  );
}

export default MyProjects;
