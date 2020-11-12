import React from "react";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav id='nav'>
      <div className='logo'>
        <Link to='/'>
          <img src={logo} alt='logo' />
          <span className='text-primary'> FoodBook</span>
        </Link>
      </div>
      {/* <ul>
        <li>
          <Link to='#what'>Favourites</Link>
        </li>
      </ul> */}
    </nav>
  );
};

export default Navbar;
