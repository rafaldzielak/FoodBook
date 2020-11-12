import React, { Fragment } from "react";
import { getRestaurants, setLoadingRestaurants } from "../actions/restaurants";
import { connect } from "react-redux";
import RankingItem from "./RankingItem";
import Pagination from "./Pagination";
import Search from "../layout/Search";

import { Col, Preloader } from "react-materialize";

const Ranking = ({ city, restaurants: { restaurants, loading } }) => {
  return (
    <Fragment>
      <Search />
      {loading && city ? (
        <Col className='center' s={6}>
          <Preloader className='center' active color='red' flashing={false} size='big' />
        </Col>
      ) : (
        <Fragment>
          <h3 className='best-restaurants'>
            Best Restaurants for city{" "}
            {restaurants.length > 0 && restaurants[0].restaurant.location.city}:
          </h3>
          {restaurants.map((restaurant) => (
            <RankingItem restaurant={restaurant.restaurant} key={restaurant.restaurant.id} />
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
