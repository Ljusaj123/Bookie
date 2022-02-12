import { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import HeroImg from "../../assets/hero.jpg";
import Link from "next/link";

const Header = () => {
  return (
    <header className="header">
      <Navbar />
      <div className="header__slogan">
        <h1 className="header__slogan__text">Read more, read often</h1>
        <Link href="/catalog">
          <a className="header__slogan__button">browse catalog</a>
        </Link>
      </div>

      <div className="header__scroll-down"></div>
    </header>
  );
};

export default Header;
