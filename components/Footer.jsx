import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="glass-band border-t border-white/50 dark:border-white/10">
      <div className="max-w-custom py-20 flex flex-col md:flex-row justify-between gap-8">
        <div>
          <h2 className="mb-5 font-bold">SUBHASH CHAUDHARY</h2>
          <div className="flex flex-col gap-1">
            <Link
              className="hover:text-accent dark:hover:text-accent_dark py-3"
              href="/"
              passHref
            >
              Home
            </Link>
            <Link
              href="/my-projects"
              passHref
              className="hover:text-accent dark:hover:text-accent_dark py-3"
            >
              My Projects
            </Link>
            <Link
              href="/about"
              passHref
              className="hover:text-accent dark:hover:text-accent_dark py-3"
            >
              About
            </Link>
            <Link
              href="/contact"
              passHref
              className="hover:text-accent dark:hover:text-accent_dark py-3"
            >
              Contact
            </Link>
            <Link
              href="/sitemap.xml"
              passHref
              className="hover:text-accent dark:hover:text-accent_dark py-3"
            >
              Sitemap
            </Link>
            <Link
              href="/blog"
              passHref
              className="hover:text-accent dark:hover:text-accent_dark py-3"
            >
              Blogs
            </Link>
          </div>
        </div>
        <div>
          <h2 className="text-2xl md:text-xl font-bold mb-5">Social Links</h2>
          <div className="flex flex-col gap-1">
            <a
              href="https://www.facebook.com/imsuubash"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3"
            >
              FACEBOOK
            </a>

            <a
              href="https://github.com/subhash-chy"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3"
            >
              GITHUB
            </a>

            <a
              href="https://www.instagram.com/_subhash_chy"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3"
            >
              INSTAGRAM
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
