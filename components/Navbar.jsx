import React, { useSyncExternalStore } from "react";
import { IoMdMoon } from "react-icons/io";
import { RiSunFill } from "react-icons/ri";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import { MobileMenu } from ".";

// subscribe to nothing; used only to detect client-side rendering
const emptySubscribe = () => () => {};

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
          ? "text-accent dark:text-accent_dark bg-accent/10 dark:bg-accent_dark/15"
          : "transition-all hover:text-accent dark:hover:text-accent_dark hover:bg-white/50 dark:hover:bg-white/10"
      }  hidden md:inline-block rounded-full px-4 py-2`}
    >
      {title}
    </Link>
  );
};

function Navbar() {
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
  const { theme, setTheme } = useTheme();

  return (
    <div className="sticky top-0 z-50 max-w-custom pt-3 md:pt-5">
      <nav className="glass glass-edge sheen rounded-[24px] px-4 py-2.5 md:rounded-full md:px-5 md:py-2">
        <div className="flex items-center justify-between">
          <div className="text-lg flex items-center gap-1 md:gap-1 font-medium">
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
          <button
            type="button"
            aria-label="Toggle theme"
            onClick={() => {
              setTheme(theme === "light" ? "dark" : "light");
            }}
            className="glass glass-edge cursor-pointer rounded-full p-3 text-accent dark:text-accent_dark hover:scale-105 transition"
          >
            {mounted &&
              (theme === "light" ? (
                <IoMdMoon className="icon" />
              ) : (
                <RiSunFill className="icon" />
              ))}
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
