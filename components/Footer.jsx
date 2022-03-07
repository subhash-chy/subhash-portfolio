import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="bg-secondary dark:bg-secondary_dark">
      <div className="max-w-custom py-20 flex flex-col md:flex-row justify-between gap-8">
        <div>
          <h2 className="mb-5">SUBASH CHAUDHARY</h2>
          <div className="flex flex-col gap-2">
            <Link href="/" passHref>
              <a className="hover:text-accent dark:hover:text-accent_dark">
                Home
              </a>
            </Link>
            <Link href="/my-projects" passHref>
              <a className="hover:text-accent dark:hover:text-accent_dark">
                My Projects
              </a>
            </Link>
            <Link href="/about" passHref>
              <a className="hover:text-accent dark:hover:text-accent_dark">
                About
              </a>
            </Link>
            <Link href="/contact" passHref>
              <a className="hover:text-accent dark:hover:text-accent_dark">
                Contact
              </a>
            </Link>
            <Link href="/sitemap.xml" passHref>
              <a className="hover:text-accent dark:hover:text-accent_dark">
                Sitemap
              </a>
            </Link>
            <Link href="/privacy-policy" passHref>
              <a className="hover:text-accent dark:hover:text-accent_dark">
                Privacy Policy
              </a>
            </Link>
            <Link href="/blog" passHref>
              <a className="hover:text-accent dark:hover:text-accent_dark">
                Blogs
              </a>
            </Link>
          </div>
        </div>
        <div>
          <h2 className="text-2xl md:text-xl font-bold mb-5">Social Links</h2>
          <div className="flex flex-col gap-2">
            <a
              href="https://www.facebook.com/SubashTharu.0"
              target="_blank"
              rel="noopener noreferrer"
            >
              FACEBOOK
            </a>

            <a
              href="https://github.com/Suubash"
              target="_blank"
              rel="noopener noreferrer"
            >
              GITHUB
            </a>

            <a
              href="https://www.instagram.com/subash.002/"
              target="_blank"
              rel="noopener noreferrer"
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
