import React, { Fragment, useState, useEffect } from "react";
import { setAlert } from "../actions/alert";
import { getRestaurants } from "../actions/restaurants";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setCity } from "../actions/city";
import "materialize-css";
import "nouislider/distribute/nouislider.css";
import { useParams, Redirect } from "react-router-dom";

import { Icon, Button, TextInput, Row, Col } from "react-materialize";
import Sort from "./Sort";

const Search = ({ city, setCity, setAlert, hideSort = false }) => {
  const [redirect, setRedirect] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    if (!city) {
      setCity(cityInput === "" ? id : cityInput);
    }
  });

  let extraCols = hideSort ? 2 : 0;
  const [cityInput, setCityInput] = useState("");
  const searchForRestaurantsInCity = (e) => {
    e.preventDefault();
    if (cityInput.length < 2) {
      setAlert("Please enter at least 2 characters", "danger");
    } else {
      setCity(cityInput);
      setCityInput("");
      setRedirect(true);
    }
  };

  const renderRedirect = () => {
    if (redirect) {
      return <Redirect to={`/${city}`} />;
    }
  };

  return (
    <Fragment>
      {renderRedirect()}

      <Row>
        <form onSubmit={(e) => searchForRestaurantsInCity(e)}>
          <Col xl={8 + extraCols} l={6 + extraCols} s={6 + extraCols}>
            <TextInput
              s={12}
              value={cityInput}
              onChange={(e) => setCityInput(e.target.value)}
              id='TextInput-4'
              label='Please Enter City'
            />
          </Col>
          <Col xl={2} l={2} s={3}>
            <Button s={12} large className='p-t2' node='button' type='submit'>
              <Icon right>send</Icon>
            </Button>
          </Col>
        </form>
        {!hideSort && <Sort />}
      </Row>
    </Fragment>
  );
};

Search.propTypes = {
  setAlert: PropTypes.func.isRequired,
  getRestaurants: PropTypes.func.isRequired,
  setCity: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  city: state.city.city,
});

export default connect(mapStateToProps, {
  setAlert,
  getRestaurants,
  setCity,
})(Search);
