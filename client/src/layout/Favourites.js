import React, { Fragment, useEffect } from "react";
import { getFavourites, clearFavourites } from "../actions/restaurants";
import { connect } from "react-redux";
import RankingItem from "../ranking/RankingItem";

import { Col, Preloader } from "react-materialize";

const Favourites = ({
  city,
  restaurants: { restaurants, loading, favourites },
  getFavourites,
  clearFavourites,
}) => {
  let favouriteIds = [];
  // let favourites = [];
  useEffect(() => {
    if (localStorage.getItem("favouriteRestaurants")) {
      favouriteIds = JSON.parse(localStorage.getItem("favouriteRestaurants"));
    }
    getFavourites(favouriteIds);
  }, []);
  useEffect(
    () => () => {
      clearFavourites();
    },
    []
  );

  return (
    <Fragment>
      {loading ? (
        <Col className='center' s={6}>
          <Preloader className='center' active color='red' flashing={false} size='big' />
        </Col>
      ) : (
        <Fragment>
          <div className='container-custom'>
            <h3 className='best-restaurants container-custom'>Your Favourite Restaurants:</h3>
            {favourites.map((restaurant) => (
              <RankingItem restaurant={restaurant} key={restaurant.id} />
            ))}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  restaurants: state.restaurant,
  city: state.city.city,
  reviews: state.review,
});

export default connect(mapStateToProps, { getFavourites, clearFavourites })(Favourites);
