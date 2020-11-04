import React, { useState } from "react";
import { setAlert } from "../actions/alert";
import { getRestaurants } from "../actions/restaurants";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setCity, setSorting, clearSorting } from "../actions/city";
import "materialize-css";
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
import wNumb from "wnumb";

import {
  Collapsible,
  CollapsibleItem,
  Icon,
  Checkbox,
  Button,
  Modal,
  Dropdown,
  Divider,
} from "react-materialize";

const Search = ({ city, setCity, setAlert, getRestaurants, setSorting, clearSorting }) => {
  const [cityInput, setCityInput] = useState("");
  const searchForRestaurantsInCity = (e) => {
    e.preventDefault();
    setCity(cityInput);
    setCityInput("");
  };

  // const [priceFilter, setPriceFilter] = useState([1, 4]);

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
                value={cityInput}
                onChange={(e) => setCityInput(e.target.value)}
              />
            </div>
          </div>
        </form>
      </div>
      <Dropdown
        id='Dropdown_6'
        options={{
          alignment: "left",
          autoTrigger: true,
          closeOnClick: true,
          constrainWidth: true,
          container: null,
          coverTrigger: true,
          hover: false,
          inDuration: 150,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          outDuration: 250,
        }}
        trigger={<Button node='button'>Drop Me!</Button>}>
        <p
          onClick={(e) => {
            setSorting("cost");
          }}>
          Price
        </p>
        <p
          onClick={(e) => {
            setSorting("rating");
          }}>
          Rating
        </p>
        <Divider />
        <p
          onClick={(e) => {
            clearSorting();
          }}>
          Default
        </p>
        <a href='#'>
          <Icon>view_module</Icon>
          four
        </a>
        <a href='#'>
          <Icon>cloud</Icon> five
        </a>
      </Dropdown>
    </div>
  );
};

Search.propTypes = {
  setAlert: PropTypes.func.isRequired,
  getRestaurants: PropTypes.func.isRequired,
  setCity: PropTypes.func.isRequired,
  setSorting: PropTypes.func.isRequired,
  clearSorting: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  city: state.city.city,
});

export default connect(mapStateToProps, {
  setAlert,
  getRestaurants,
  setCity,
  setSorting,
  clearSorting,
})(Search);
