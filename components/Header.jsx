import React from "react";
import { Button } from ".";
import { FiSearch } from "react-icons/fi";
import Image from "next/image";
import { useRouter } from "next/router";

function Header(props) {
  const router = useRouter();
  const {
    title,
    subtitle,
    paragraphs,
    button,
    image,
    searchbar,
    author,
    author_photo,
    read_time,
    post_created_date,
    changeSearch,
  } = props;
  
  return (
    <div className="bg-secondary dark:bg-secondary_dark">
      <div className="max-w-custom md:grid grid-cols-12 gap-5 pb-20">
        {image && (
          <div className="h-32 w-32 rounded-full col-span-3 justify-self-end mb-8 md:mb-0 relative">
            <Image
              src={"/profile-pic.png"}
              alt="Subash Chaudhary - A blogger and Front-End developer"
              layout="fill"
            />
          </div>
        )}
        <div className={`${image ? "col-span-9" : "col-span-12"} row-end-1`}>
          <h1
            className={`mb-3 md:leading-relaxed ${
              router.asPath === "/" ? "md:text-5xl" : "text-2xl md:text-4xl"
            }`}
          >
            {title}
          </h1>
          <div className="space-y-5">
            <p>{subtitle}</p>
            <p>{paragraphs}</p>
            {author && author_photo && (
              <div className="flex flex-col md:flex-row justify-between gap-5">
                <div className="flex items-center gap-5">
                  <div className="w-10 h-10 relative">
                    <Image
                      src={author_photo}
                      alt={author}
                      objectFit="cover"
                      layout="fill"
                      className="rounded-full"
                    />
                  </div>
                  <p className="text-xs md:text-base">{author}</p>
                  <p className="text-xs md:text-base">{post_created_date}</p>
                </div>
                <p className="text-xs md:text-base">{read_time} min read</p>
              </div>
            )}
            {button && (
              <Button
                onClick={button.onClick}
                highEmphasis={button.highEmphasis}
              >
                {button.title}
              </Button>
            )}
            {searchbar && (
              <div className="bg-white rounded-md dark:bg-[#222222] flex items-center justify-between">
                <input
                  className="bg-transparent input-custom"
                  type="search"
                  name="search"
                  placeholder={searchbar.placeholder}
                  onChange={(e) => changeSearch(e.target.value)}
                />
                <FiSearch className="icon mx-3 text-[#a9a9a9]" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
