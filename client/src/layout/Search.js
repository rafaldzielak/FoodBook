import React, { useState } from "react";

const Search = () => {
  const [city, setCity] = useState("");

  const searchForRestaurantsInCity = () => {};

  return (
    <div>
      <div class='row'>
        <form class='col s12'>
          <div class='row'>
            <div class='input-field col s6'>
              <i class='material-icons prefix'>location_city</i>
              <input
                placeholder='Search for the city'
                id='icon_prefix'
                type='text'
                value={city}
                onChange={(e) => setCity(e.target.value)}
                onsubmit={searchForRestaurantsInCity}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;
