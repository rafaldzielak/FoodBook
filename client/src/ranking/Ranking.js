import React, { Fragment, useEffect } from "react";
import { getRestaurants } from "../actions/restaurants";
import { connect } from "react-redux";
import RankingItem from "./RankingItem";

const Ranking = ({ restaurants, getRestaurants }) => {
  useEffect(() => {
    getRestaurants("lodz");
  }, []);
  return (
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
  );
};

const mapStateToProps = (state) => ({
  restaurants: state.restaurant.restaurants,
});

export default connect(mapStateToProps, { getRestaurants })(Ranking);
