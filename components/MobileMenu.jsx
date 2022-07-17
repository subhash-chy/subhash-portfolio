// import cn from 'classnames';
import Link from "next/link";
import useDelayedRender from "use-delayed-render";
import { useState, useEffect } from "react";
import styles from "../styles/mobile-menu.module.css";

export default function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { mounted: isMenuMounted, rendered: isMenuRendered } = useDelayedRender(
    isMenuOpen,
    {
      enterDelay: 20,
      exitDelay: 300,
    }
  );

  function toggleMenu() {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = "";
    } else {
      setIsMenuOpen(true);
      document.body.style.overflow = "hidden";
    }
  }

  useEffect(() => {
    return function cleanup() {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <>
      <button
        className={`${styles.burger} visible md:hidden`}
        aria-label="Toggle menu"
        type="button"
        onClick={toggleMenu}
      >
        <MenuIcon data-hide={isMenuOpen} />
        <CrossIcon data-hide={!isMenuOpen} />
      </button>
      {isMenuMounted && (
        <ul
          className={`
            ${styles.menu}
            flex flex-col absolute bg-secondary dark:bg-secondary_dark max-w-custom
            ${isMenuRendered && styles.menuRendered}
          `}
        >
          <li
            className="border-b text-sm font-semibold"
            style={{ transitionDelay: "150ms" }}
          >
            <Link href="/">
              <a className="flex w-auto pb-4">Home</a>
            </Link>
          </li>
          <li
            className="border-b text-sm font-semibold"
            style={{ transitionDelay: "175ms" }}
          >
            <Link href="/blog">
              <a className="flex w-auto pb-4">Blog</a>
            </Link>
          </li>
          <li
            className="border-b text-sm font-semibold"
            style={{ transitionDelay: "200ms" }}
          >
            <Link href="/about">
              <a className="flex w-auto pb-4">About</a>
            </Link>
          </li>
          <li
            className="border-b text-sm font-semibold"
            style={{ transitionDelay: "250ms" }}
          >
            <Link href="/contact">
              <a className="flex w-auto pb-4">Contact</a>
            </Link>
          </li>
          <li
            className="border-b text-sm font-semibold"
            style={{ transitionDelay: "275ms" }}
          >
            <Link href="/privacy-policy">
              <a className="flex w-auto pb-4">Privacy policy</a>
            </Link>
          </li>
          <li
            className="border-b text-sm font-semibold"
            style={{ transitionDelay: "300ms" }}
          >
            <Link href="/my-projects">
              <a className="flex w-auto pb-4">Projects</a>
            </Link>
          </li>
        </ul>
      )}
    </>
  );
}

function MenuIcon(props) {
  return (
    <svg
      className="w-7 h-7 absolute"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <path
        d="M2.5 7.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 12.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CrossIcon(props) {
  return (
    <svg
      className="w-7 h-7 absolute"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      shapeRendering="geometricPrecision"
      {...props}
    >
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </svg>
  );
}
