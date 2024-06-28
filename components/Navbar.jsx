import React, { useEffect, useState } from "react";
import { IoMdMoon } from "react-icons/io";
import { RiSunFill } from "react-icons/ri";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import { MobileMenu } from ".";

const NavItem = ({ href, title, props }) => {
  const router = useRouter();
  const active = router.asPath === href;

  return (
    <Link
      href={href}
      passHref
      {...props}
      className={` ${
        active
          ? "text-accent dark:text-accent_dark md:border-b-4 md:border-accent md:dark:border-accent_dark"
          : "transition-all hover:text-accent dark:hover:text-accent_dark"
      }  hidden md:inline-block border-b md:border-0 py-2 md:py-0 border-accent/10`}
    >
      {title}
    </Link>
  );
};

function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  return (
    <div className="bg-tertiary dark:bg-tertiary_dark">
      <nav className=" py-8 md:py-20 max-w-custom">
        <div className="flex items-center justify-between">
          <div className="text-lg md:flex gap-5 font-medium">
            <div className="md:hidden">
              <MobileMenu />
            </div>
            <NavItem title="HOME" href="/" />
            <NavItem title="BLOG" href="/blog" />
            <NavItem title="ABOUT" href="/about" />
            <NavItem title="CONTACT" href="/contact" />
            <NavItem title="PROJECTS" href="/my-projects" />
          </div>

          {/* Dark mode toggle */}
          <span
            onClick={() => {
              setTheme(theme === "light" ? "dark" : "light");
            }}
            className="cursor-pointer"
          >
            {mounted &&
              (theme === "light" ? (
                <IoMdMoon className="icon" />
              ) : (
                <RiSunFill className="icon" />
              ))}
          </span>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
