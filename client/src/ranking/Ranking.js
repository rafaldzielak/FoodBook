import React, { Fragment, useEffect } from "react";
import { getRestaurants, setLoadingRestaurants } from "../actions/restaurants";
import { connect } from "react-redux";
import RankingItem from "./RankingItem";
import Pagination from "./Pagination";
import Search from "../layout/Search";

import { Col, Preloader } from "react-materialize";

const Ranking = ({ city, restaurants: { restaurants, loading }, reviews }) => {
  console.log(restaurants);
  

  return (
    <Fragment>
      <Search />
      {console.log(city)}
      {loading && city ? (
        <Col className='center' s={6}>
          <Preloader className='center' active color='red' flashing={false} size='big' />
        </Col>
      ) : (
        <Fragment>
          <h3 class='best-restaurants'>
            Best Restaurants for city{" "}
            {restaurants.length > 0 && restaurants[0].restaurant.location.city}:
          </h3>
          {console.log(restaurants)}
          {restaurants.map((restaurant) => (
            <RankingItem restaurant={restaurant.restaurant} />
          ))}
        </Fragment>
      )}
      <Pagination />
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  restaurants: state.restaurant,
  city: state.city.city,
  reviews: state.review,
});

export default connect(mapStateToProps, { setLoadingRestaurants, getRestaurants })(Ranking);
