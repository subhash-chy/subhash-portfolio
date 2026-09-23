import React from "react";
import Image from "next/image";
import { FiSearch } from "react-icons/fi";
import { useRouter } from "next/router";
import { Button } from ".";

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
    <div className="glass-band border-b border-white/50 dark:border-white/10">
      <div className="max-w-custom md:grid grid-cols-12 gap-5 pt-14 pb-20 md:pt-20">
        {image && (
          <div className="h-32 w-32 rounded-full col-span-3 justify-self-end mb-8 md:mb-0 relative glass-ring">
            <Image
              src={"/profile-pic.png"}
              alt="Subash Chaudhary - A blogger and Front-End developer"
              fill
              priority
              sizes="128px"
              className="rounded-full object-cover"
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
                  {/* Author photos come from the CMS and load directly (never
                      through the optimizer) so they work from any network */}
                  <div className="w-10 h-10 relative glass-ring">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={author_photo}
                      alt={author}
                      width={40}
                      height={40}
                      loading="lazy"
                      decoding="async"
                      className="rounded-full object-cover w-10 h-10"
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
              <div className="glass glass-edge rounded-full flex items-center justify-between">
                <input
                  className="input-ghost"
                  type="search"
                  name="search"
                  aria-label="Search blogs"
                  placeholder={searchbar.placeholder}
                  onChange={(e) => changeSearch(e.target.value)}
                />
                <FiSearch className="icon mx-3 text-secondary_dark dark:text-secondary" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
