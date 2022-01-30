import { navigationItems } from "../const/navbarList";
import { useState, useEffect } from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="desktop-navigation">
        <a className="desktop-navigation__banner">Bookie</a>

        <div className="desktop-navigation__items">
          {navigationItems.map((item) => (
            <a key={item}>{item}</a>
          ))}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
