import React, { useState } from "react";
import { setAlert } from "../actions/alert";
import { getRestaurants } from "../actions/restaurants";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setCity, setSorting, clearSorting } from "../actions/city";
import "materialize-css";
import "nouislider/distribute/nouislider.css";
import noFilter from "./no-filter.png";

import { Icon, Button, Dropdown, Divider, TextInput, Row, Col } from "react-materialize";

const Search = ({ city, setCity, setAlert, getRestaurants, setSorting, clearSorting }) => {
  const [cityInput, setCityInput] = useState("");
  const searchForRestaurantsInCity = (e) => {
    e.preventDefault();
    if (cityInput.length < 2) {
      console.log("alert");
      setAlert("Please enter at least 2 characters", "danger");
    } else {
      setCity(cityInput);
      setCityInput("");
    }
  };

  // const [priceFilter, setPriceFilter] = useState([1, 4]);

  return (
    <div>
      <Row>
        <form onSubmit={(e) => searchForRestaurantsInCity(e)}>
          <Col className='s6' xl={8} l={6} s={3}>
            <TextInput
              s={12}
              value={cityInput}
              onChange={(e) => setCityInput(e.target.value)}
              id='TextInput-4'
              label='Search for the city'
            />
          </Col>
          <Col s={1.5}>
            <Button s={12} large className='p-t2' node='button' type='submit'>
              <Icon right>send</Icon>
            </Button>
          </Col>
        </form>

        <Col s={2}>
          <Dropdown
            className='p-t2'
            id='Dropdown_6'
            options={{
              alignment: "right",
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
            trigger={
              <Button node='button'>
                <Icon className='sort-icon'>sort</Icon>
              </Button>
            }>
            <p className='dropdown-elem' onClick={(e) => setSorting("cost")}>
              <Icon className='dollar-green' small>
                attach_money
              </Icon>
            </p>
            <Divider />
            <p className='dropdown-elem' onClick={(e) => setSorting("rating")}>
              <i className='fas fa-star gold'></i>
              <i className='fas fa-star gold'></i>
              <i className='fas fa-star gold'></i>
            </p>
            <Divider />
            <p className='dropdown-elem' onClick={(e) => clearSorting()}>
              <img className='no-filter' src={noFilter} alt='AAA' />
            </p>
          </Dropdown>
        </Col>
      </Row>
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
