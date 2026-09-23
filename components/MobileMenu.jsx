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
            glass glass-strong flex flex-col fixed gap-3
            ${isMenuRendered && styles.menuRendered}
          `}
        >
          <li
            className="glass glass-edge glass-hover rounded-2xl text-sm font-semibold"
            style={{ transitionDelay: "150ms" }}
          >
            <Link href="/" className="flex w-auto px-5 py-4">
              Home
            </Link>
          </li>
          <li
            className="glass glass-edge glass-hover rounded-2xl text-sm font-semibold"
            style={{ transitionDelay: "175ms" }}
          >
            <Link href="/blog" className="flex w-auto px-5 py-4">
              Blog
            </Link>
          </li>
          <li
            className="glass glass-edge glass-hover rounded-2xl text-sm font-semibold"
            style={{ transitionDelay: "200ms" }}
          >
            <Link href="/about" className="flex w-auto px-5 py-4">
              About
            </Link>
          </li>
          <li
            className="glass glass-edge glass-hover rounded-2xl text-sm font-semibold"
            style={{ transitionDelay: "250ms" }}
          >
            <Link href="/contact" className="flex w-auto px-5 py-4">
              Contact
            </Link>
          </li>
          <li
            className="glass glass-edge glass-hover rounded-2xl text-sm font-semibold"
            style={{ transitionDelay: "275ms" }}
          >
            <Link href="/privacy-policy" className="flex w-auto px-5 py-4">
              Privacy policy
            </Link>
          </li>
          <li
            className="glass glass-edge glass-hover rounded-2xl text-sm font-semibold"
            style={{ transitionDelay: "300ms" }}
          >
            <Link href="/my-projects" className="flex w-auto px-5 py-4">
              Projects
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
