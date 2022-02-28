import React, { useEffect, useState } from "react";
import { IoMdMoon } from "react-icons/io";
import { CgMenuLeft, CgClose } from "react-icons/cg";
import { RiSunFill } from "react-icons/ri";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import useDelayedRender from "use-delayed-render";
import { MobileMenu } from ".";

const NavItem = ({ href, title, props }) => {
  const router = useRouter();
  const active = router.asPath === href;

  return (
    <Link href={href} passHref>
      <a
        {...props}
        className={` ${
          active
            ? "text-accent dark:text-accent_dark md:border-b-4 md:border-accent md:dark:border-accent_dark"
            : "transition-all hover:text-accent dark:hover:text-accent_dark"
        }  border-b md:border-0 py-2 md:py-0 border-accent/10`}
      >
        {title}
      </a>
    </Link>
  );
};

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const { mounted: isMenuMounted, rendered: isMenuRendered } = useDelayedRender(
  //   isMenuOpen,
  //   {
  //     enterDelay: 20,
  //     exitDelay: 300,
  //   }
  // );

  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  return (
    <div className="bg-secondary dark:bg-secondary_dark">
      <nav className=" py-8 md:py-20 max-w-custom">
        <div className="flex items-center justify-between">
          <button
            aria-label="Toggle button"
            className="md:hidden"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            {!isMenuOpen ? (
              <CgMenuLeft className="icon md:hidden" />
            ) : (
              <CgClose className="icon md:hidden" />
            )}
          </button>

          {/* my-5 md:my-20 */}
          <div className="hidden md:flex gap-5 text-lg font-medium">
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
        {isMenuOpen && (
          <div className=" flex md:hidden flex-col py-5">
            <NavItem title="HOME" href="/" />
            <NavItem title="BLOG" href="/blog" />
            <NavItem title="ABOUT" href="/about" />
            <NavItem title="CONTACT" href="/contact" />
            <NavItem title="PROJECTS" href="/my-projects" />
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;