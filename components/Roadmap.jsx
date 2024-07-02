import React from "react";
import Button from "./Button";
import { useRoadmap } from "../hooks/useRoadmap";
import Xarrow from "react-xarrows";

const Roadmap = (props) => {
  const { data } = props;
  const { lines } = useRoadmap(data);

  return (
    <div>
      {data.map((data, index) => (
        <div
          key={index}
          className={`flex items-center ${
            index % 2 ? "justify-end" : "md:text-right"
          }`}
        >
          <div
            className={`mb-2 md:max-w-md flex md:items-center justify-start items-start  ${
              index % 2 ? "" : "md:flex-row-reverse"
            }`}
          >
            <div
              id={`dot${index + 1}`}
              className="shadow-glow-accent bg-accent dark:bg-accent_dark  rounded-full w-8 h-8  min-w-[2rem]"
            ></div>
            <div
              className={`bg-secondary dark:bg-secondary_dark px-8 py-10 rounded-md border border-neutral-200 dark:border-neutral-700 flex items-center justify-start gap-5 ml-8  md:mr-8 flex-wrap ${
                index % 2 ? "md:mr-0" : "md:flex-row-reverse md:ml-0"
              }`}
            >
              <div>
                <p className="text-3xl font-bold">
                  {index + 1 >= 10 ? null : 0}
                  {index + 1}
                </p>
                <h2 className="w-full md:text-3xl">{data.title}</h2>
              </div>
              <p className="max-w-full opacity-80">{data.description}</p>
              {data.link && (
                <Button
                  onClick={() => {
                    window.open(data.link, "_blank", "noopener noreferrer");
                  }}
                >
                  Live View
                </Button>
              )}
            </div>
          </div>
        </div>
      ))}

      {lines.map((line, i) => (
        <Xarrow key={i} {...line} zIndex={-1} />
      ))}
    </div>
  );
};

export default Roadmap;
