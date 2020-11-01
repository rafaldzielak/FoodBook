import React, { useState } from "react";
import { setAlert } from "../actions/alert";
import { getRestaurants } from "../actions/restaurants";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Search = ({ setAlert, getRestaurants }) => {
  const [city, setCity] = useState("");

  const searchForRestaurantsInCity = (e) => {
    e.preventDefault();
    getRestaurants(city);
  };

  return (
    <div>
      <div class='row'>
        <form class='col s12' onSubmit={(e) => searchForRestaurantsInCity(e)}>
          <div class='row'>
            <div class='input-field col s12'>
              <i class='material-icons prefix'>location_city</i>
              <input
                placeholder='Search for the city'
                id='icon_prefix'
                type='text'
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

Search.propTypes = {
  setAlert: PropTypes.func.isRequired,
};

export default connect(null, { setAlert, getRestaurants })(Search);
