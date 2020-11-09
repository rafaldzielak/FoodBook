import React from "react";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav id='nav'>
      <div class='logo'>
        <Link to='/'>
          <img src={logo} alt='logo' />
          <span class='text-primary'> FoodBook</span>
        </Link>
      </div>
      <ul>
        <li>
          <Link to='#what'>Zakres Usług</Link>
        </li>
        <li>
          <Link to='#contact'>Kontakt</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
