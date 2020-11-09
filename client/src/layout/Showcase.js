import React, { Fragment } from "react";
import Search from "./Search";

const Showcase = () => {
  return (
    <div className='showcase'>
      <div className='showcase-desc'>
        <h1>FoodBook</h1>
        <h4>Find Your Dream Restaurant</h4>
      </div>

      <div className='showcase-search card-panel lighten-2'>
        <Search hideSort={true}></Search>
      </div>
    </div>
  );
};

export default Showcase;
