import { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import HeroImg from "../../assets/hero.jpg";

const Header = () => {
  return (
    <header className="header">
      <Image className="header-hero" src={HeroImg} alt="hero-image" />
      <Navbar />
      <h1>LOREM IPSUM</h1>
      <button>Browse catalog</button>
    </header>
  );
};

export default Header;
