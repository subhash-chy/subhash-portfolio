import Image from "next/image";
import Link from "next/link";
import { FeaturedPosts } from ".";

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
    className="rounded-md"
    width={1920}
    height={1080}
    alt={props.alt}
    layout="responsive"
    objectFit="cover"
    quality={70}
  />
);

// INFO Comp
const CustomInfo = ({ title, danger, warning }) => {
  return (
    <div
      className={`${
        danger ? "bg-red-500" : warning ? "bg-yellow-400/30" : "bg-green-400/30"
      } p-10 rounded-md`}
    >
      {danger ? (
        <span className="font-bold">Warning! </span>
      ) : warning ? (
        <span className="font-bold">Note! </span>
      ) : (
        <span className="font-bold">Info! </span>
      )}
      {title}
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
      className="pl-5 border-l-4 border-accent dark:border-accent_dark"
      {...props}
    />
  ),
  // CustomInfo shows Warning, Danger, or Info Component directly getting from GraphCMS
  CustomInfo,
  FeaturedPosts,
};

export default MDXComponents;
