import React from "react";
import { Button, Header } from "../components";
import { my_projects_data } from "../data";
import { Layout } from "../layouts";
import Xarrow from "react-xarrows";
import { useTheme } from "next-themes";
// Commonjs syntax: color import from constants
const colors = require("../constants/colors");

function MyProjects() {
  const theme = useTheme();

  // creating an empty array of lines
  const lines = [];
  const color =
    theme.resolvedTheme === "dark" ? colors.accent_dark : colors.accent;

  // using for loop to insert into lines array
  for (let i = 0; i < my_projects_data.length - 1; i++) {
    lines.push({
      start: `dot${i + 1}`,
      end: `dot${i + 2}`,
      color: color,
      headSize: 0,
      strokeWidth: 2,
      curveness: 0.001, //.001 to make straight line
      startAnchor: "middle",
      endAnchor: "middle",
      dashness: { strokeLen: 40, nonStrokeLen: 20, animation: 0.3 },
    });
  }
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
        {/* <h1 className="text-6xl font-black">
          Unfinished work! Needs to be refined.
        </h1> */}
        {my_projects_data.map((data, index) => (
          <div
            key={index}
            className={`flex items-center ${
              index % 2 ? "justify-end" : "md:text-right"
            }`}
          >
            <div
              className={`md:max-w-md flex md:items-center justify-start items-start  ${
                index % 2 ? "" : "md:flex-row-reverse"
              }`}
            >
              <div
                id={`dot${index + 1}`}
                className="shadow-glow  bg-accent dark:bg-accent_dark  rounded-full w-8 h-8  min-w-[2rem]"
              ></div>
              <div
                className={`flex items-center justify-start gap-5 ml-8  md:mr-8 flex-wrap ${
                  index % 2 ? "md:mr-0" : "md:flex-row-reverse md:ml-0"
                }`}
              >
                <div>
                  <p className="text-3xl font-bold">
                    {index + 1 >= 10 ? null : 0}
                    {index + 1}
                  </p>
                  <h2 className="w-full">{data.title}</h2>
                </div>
                <p className="max-w-full">{data.description}</p>
                {data.link && (
                  <Button
                    onClick={() => {
                      window.open(
                        "https://chaudharysubash.vercel.app",
                        "_blank",
                        "noopener noreferrer"
                      );
                    }}
                  >
                    Live View
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))}

        {/* Creating the line between dots */}
        {lines.map((line, i) => (
          <Xarrow key={i} {...line} zIndex={-1} />
        ))}
      </div>
    </Layout>
  );
}

export default MyProjects;
