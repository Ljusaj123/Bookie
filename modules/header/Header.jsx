import { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import HeroImg from "../../assets/hero.jpg";

const Header = () => {
  return (
    <header className="header">
      <Navbar />
      <div className="header__slogan">
        <h1 className="header__slogan__text">LOREM IPSUM</h1>
        <button className="header__slogan__button">browse catalog</button>
      </div>
    </header>
  );
};

export default Header;
