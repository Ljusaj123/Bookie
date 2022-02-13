import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <nav>
      <div className="navbar-wrapper">
        <Link href="/">
          <a className="navbar-banner">Bookie</a>
        </Link>

        <div className="desktop-navigation">
          <Link href="/catalog">
            <a> catalog</a>
          </Link>
          <Link href="/about-us">
            <a>about us</a>
          </Link>
          <Link href="/blog">
            <a>blog</a>
          </Link>
          <Link href="#scroll">
            <a>contact</a>
          </Link>
          <Link href="/login">
            <a>login</a>
          </Link>
        </div>

        <div
          onClick={() => {
            setIsMobileNavOpen(!isMobileNavOpen);
          }}
          className={isMobileNavOpen ? `burger open-burger` : `burger`}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <div
          className={
            isMobileNavOpen
              ? `mobile-navigation open-mobile`
              : `mobile-navigation`
          }
        >
          <Link href="/catalog">
            <a> catalog</a>
          </Link>
          <Link href="/about-us">
            <a>about us</a>
          </Link>
          <Link href="/blog">
            <a>blog</a>
          </Link>
          <Link href="#scroll">
            <a
              onClick={() => {
                if (isMobileNavOpen) {
                  setIsMobileNavOpen(false);
                }
              }}
            >
              contact
            </a>
          </Link>
          <Link href="/login">
            <a>login</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
