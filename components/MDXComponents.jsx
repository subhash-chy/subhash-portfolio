import Image from "next/image";
import Link from "next/link";
import { FeaturedPosts } from ".";
import { TiInfo, TiWarning, TiBeaker } from "react-icons/ti";

// Creating a custom Link comp
const CustomLink = (props) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return (
      <Link
        href={href}
        className="text-accent dark:text-accent_dark hover:underline "
        {...props}
      >
        {props.children}
      </Link>
    );
  }

  return (
    <a
      className="text-accent dark:text-accent_dark hover:underline "
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  );
};

//   creating a Image Comp
const CustomImage = (props) => (
  <Image
    {...props}
    className="rounded-2xl w-full h-auto object-cover ring-1 ring-white/50 dark:ring-white/10 shadow-[0_10px_36px_rgba(20,20,40,0.14)]"
    width={1920}
    height={1080}
    alt={props.alt}
    quality={70}
  />
);

// INFO Comp
const CustomInfo = ({ title, danger, warning, children }) => {
  return (
    <div
      className={`glass glass-edge px-10 pt-4 sm:pt-10 pb-10 my-6 rounded-[24px] flex gap-2 justify-center items-center sm:items-start flex-col sm:flex-row`}
    >
      <div>
        {danger ? (
          <span className="font-bold">
            <TiWarning className="text-red-500 h-16 w-16 sm:h-10 sm:w-10" />{" "}
          </span>
        ) : warning ? (
          <span className="font-bold">
            <TiBeaker className="text-yellow-500 h-16 w-16 sm:h-10 sm:w-10" />{" "}
          </span>
        ) : (
          <span className="font-bold">
            <TiInfo className="text-green-500 h-16 w-16 sm:h-10 sm:w-10" />
          </span>
        )}
      </div>
      <div>
        <h3 className="text-xl sm:text-2xl">{title}</h3>
        <div className="text-md flex flex-col gap-4">{children}</div>
      </div>
    </div>
  );
};

// Making custom components from MDX components
const MDXComponents = {
  img: CustomImage,
  a: CustomLink,
  h1: (props) => <h1 className=" relative mt-10 first:mt-0" {...props} />,
  h2: (props) => <h2 className=" relative mt-10" {...props} />,
  h3: (props) => <h3 className=" relative mt-10" {...props} />,
  p: (props) => <p className="my-5" {...props} />,
  ul: (props) => <ul className="list-disc list-inside space-y-5" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="my-6 pl-6 pr-4 py-2 glass glass-subtle glass-edge border-l-4 border-l-accent dark:border-l-accent_dark rounded-r-2xl rounded-l-lg"
      {...props}
    />
  ),
  // CustomInfo shows Warning, Danger, or Info Component directly getting from GraphCMS
  CustomInfo,
  FeaturedPosts,
};

export default MDXComponents;
