import React from "react";
import logo from "../img/logo.png";

const Navbar = () => {
  return (
    <nav id='nav'>
      <div class='logo'>
        <a href='#home'>
          <img src={logo} alt='logo' />
          <span class='text-primary'> FoodBook</span>
        </a>
      </div>
      <ul>
        <li>
          <a href='#what'>Zakres Usług</a>
        </li>
        <li>
          <a href='#contact'>Kontakt</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
