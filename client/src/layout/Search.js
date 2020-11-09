import React, { Fragment, useState } from "react";
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

const Search = ({ city, setCity, setAlert, getRestaurants, hideSort = false }) => {
  const [redirect, setRedirect] = useState(false);

  const { id } = useParams();
  let extraCols = hideSort ? 2 : 0;
  const [cityInput, setCityInput] = useState("");
  const searchForRestaurantsInCity = (e) => {
    e.preventDefault();
    if (cityInput.length < 2) {
      console.log("alert");
      setAlert("Please enter at least 2 characters", "danger");
    } else {
      setCity(cityInput);
      setCityInput("");
      setRedirect(true);
      // if (redirect) return <Redirect to='/target' />;
    }
  };

  const renderRedirect = () => {
    if (redirect) {
      console.log("redirect");
      console.log(city);
      return <Redirect to={`/${city}`} />;
      // return <Redirect to='dupa' />;
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
})(Search);
