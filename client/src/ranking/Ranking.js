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
      <RankingItem />
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
