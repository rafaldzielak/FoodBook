import React, { Fragment } from "react";
import ZoomedRankingItem from "./ZoomedRankingItem";
import { clearReviews, getReviews } from "../actions/reviews";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const RankingItem = ({ restaurant, getReviews, clearReviews, reviews }) => {
  const getStarRating = (rating) => {
    let starFull = <i className='fas fa-star'></i>;
    let starHalf = <i className='fas fa-star-half-alt'></i>;
    let starEmpty = <i className='far fa-star'></i>;
    return (
      <Fragment>
        {rating > 0.2 ? (rating > 0.7 ? starFull : starHalf) : starEmpty}
        {rating > 1.2 ? (rating > 1.7 ? starFull : starHalf) : starEmpty}
        {rating > 2.2 ? (rating > 2.7 ? starFull : starHalf) : starEmpty}
        {rating > 3.2 ? (rating > 3.7 ? starFull : starHalf) : starEmpty}
        {rating > 4.2 ? (rating > 4.7 ? starFull : starHalf) : starEmpty}
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

  const wrappedInfo = () => (
    <Fragment>
      <img className='restaurant-photo' src={restaurant.photo} alt='' />
      <div className='restaurant-name truncate'>{restaurant.name} </div>
      <div className='rating'>
        <span className='stars'>{getStarRating(restaurant.user_rating.aggregate_rating)}</span>
        &nbsp;
        {restaurant.user_rating.aggregate_rating} &nbsp;
        <span className='votes'>({restaurant.user_rating.votes} votes)</span>
      </div>
      <div className='phone'>
        <i className='fas fa-phone'></i>&nbsp;
        {restaurant.phone_numbers}
      </div>
      <div className='food'>
        <i className='fas fa-utensils'></i>&nbsp;
        {restaurant.cuisines && restaurant.cuisines}
      </div>
      <div className='map'>
        <i className='fas fa-map-marker-alt'></i>&nbsp;
        <a
          href={`http://www.google.com/maps/place/${restaurant.location.latitude},${restaurant.location.longitude}`}
          target='_blank'
          rel='noreferrer'>
          {restaurant.location.address}
        </a>
      </div>
      <div className='price'>
        <i className='fas fa-dollar-sign'></i>
        <b>{getPrice(restaurant.price_range)}</b>
      </div>
      <div className='book'>
        <a href={`${restaurant.menu_url}`} target='_blank' rel='noreferrer'>
          <i className='fas fa-book'></i> Menu
        </a>
      </div>
    </Fragment>
  );

  return (
    <Fragment>
      {restaurant && (
        <div className='ranking-item'>
          {wrappedInfo()}
          <div className='more'>
            <i className='fas fa-hand-pointer'></i>
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
