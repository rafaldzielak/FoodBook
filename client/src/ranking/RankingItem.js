import React, { Fragment } from "react";
import { Modal, Button, HTMLBodyElement } from "react-materialize";
import ZoomedRankingItem from "./ZoomedRankingItem";
import { clearReviews, getReviews } from "../actions/reviews";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const RankingItem = ({ restaurant, getReviews, clearReviews, reviews }) => {
  const getStarRating = (rating) => {
    // console.log("rating");
    let stars = <i className='fas fa-star'></i>;
    if (rating > 4.7)
      return (
        <Fragment>
          <i className='fas fa-star'></i>
          <i className='fas fa-star'></i>
          <i className='fas fa-star'></i>
          <i className='fas fa-star'></i>
          <i className='fas fa-star'></i>
        </Fragment>
      );
    else if (rating > 4.2)
      return (
        <Fragment>
          <i className='fas fa-star'></i>
          <i className='fas fa-star'></i>
          <i className='fas fa-star'></i>
          <i className='fas fa-star'></i>
          <i className='fas fa-star-half-alt'></i>
        </Fragment>
      );
    else if (rating > 3.7)
      return (
        <Fragment>
          <i className='fas fa-star'></i>
          <i className='fas fa-star'></i>
          <i className='fas fa-star'></i>
          <i className='fas fa-star'></i>
          <i className='far fa-star'></i>
        </Fragment>
      );
    else if (rating > 3.2)
      return (
        <Fragment>
          <i className='fas fa-star'></i>
          <i className='fas fa-star'></i>
          <i className='fas fa-star'></i>
          <i className='fas fa-star-half-alt'></i>
          <i className='far fa-star'></i>
        </Fragment>
      );
    else if (rating > 2.7)
      return (
        <Fragment>
          <i className='fas fa-star'></i>
          <i className='fas fa-star'></i>
          <i className='fas fa-star'></i>
          <i className='far fa-star'></i>
          <i className='far fa-star'></i>
        </Fragment>
      );
    else if (rating > 2.2)
      return (
        <Fragment>
          <i className='fas fa-star'></i>
          <i className='fas fa-star'></i>
          <i className='fas fa-star-half-alt'></i>
          <i className='far fa-star'></i>
          <i className='far fa-star'></i>
        </Fragment>
      );
    else if (rating > 1.7)
      return (
        <Fragment>
          <i className='fas fa-star'></i>
          <i className='fas fa-star'></i>
          <i className='far fa-star'></i>
          <i className='far fa-star'></i>
          <i className='far fa-star'></i>
        </Fragment>
      );
    else if (rating > 1.2)
      return (
        <Fragment>
          <i className='fas fa-star'></i>
          <i className='fas fa-star-half-alt'></i>
          <i className='far fa-star'></i>
          <i className='far fa-star'></i>
          <i className='far fa-star'></i>
        </Fragment>
      );
    else if (rating > 0.7)
      return (
        <Fragment>
          <i className='fas fa-star'></i>
          <i className='far fa-star'></i>
          <i className='far fa-star'></i>
          <i className='far fa-star'></i>
          <i className='far fa-star'></i>
        </Fragment>
      );
  };

  function getPrice(number) {
    let dollars = " ";
    for (let i = 0; i < number; i++) {
      dollars += "$";
    }
    return dollars;
  }
  // const getMoreInfo = () => {
  //   console.log(reviews.reviews);
  //   if (reviews.reviews.length === 0) {
  //     getReviews(restaurant.id);
  //   }
  // };

  const wrappedInfo = () => (
    <Fragment>
      <img className='restaurant-photo' src={restaurant.photo} alt='' />
      <div className='restaurant-name truncate'>{restaurant.name}</div>
      <div className='rating'>
        <span className='stars'>{getStarRating(restaurant.user_rating.aggregate_rating)}</span>
        &nbsp;
        {restaurant.user_rating.aggregate_rating} &nbsp;
        <span className='votes'>({restaurant.user_rating.votes} votes)</span>
      </div>
      <div className='phone'>
        <i class='fas fa-phone'></i>&nbsp;
        {restaurant.phone_numbers}
      </div>
      <div className='food'>
        <i class='fas fa-utensils'></i>&nbsp;
        {restaurant.cuisines && restaurant.cuisines}
      </div>
      <div className='map'>
        <i class='fas fa-map-marker-alt'></i>&nbsp;
        <a
          href={`http://www.google.com/maps/place/${restaurant.location.latitude},${restaurant.location.longitude}`}
          target='_blank'>
          {restaurant.location.address}
        </a>
      </div>
      <div className='price'>
        <i class='fas fa-dollar-sign'></i>
        <b>{getPrice(restaurant.price_range)}</b>
      </div>
      <div className='book'>
        <a href={`${restaurant.menu_url}`} target='_blank'>
          <i class='fas fa-book'></i> Menu
        </a>
      </div>
    </Fragment>
  );

  return (
    <Fragment>
      {/* {console.log(restaurant)} */}
      {restaurant && (
        <div className='ranking-item'>
          {wrappedInfo()}
          <div className='more'>
            <i class='fas fa-hand-pointer'></i>
            <span>
              <ZoomedRankingItem
                restaurant={restaurant}
                getStarRating={getStarRating}
                wrappedInfo={wrappedInfo}
              />
            </span>
          </div>
        </div>
      )}
    </Fragment>
  );
};

RankingItem.propTypes = {
  getReviews: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  reviews: state.review,
});

export default connect(mapStateToProps, { getReviews, clearReviews })(RankingItem);
