import React, { Fragment } from "react";

const RankingItem = (props) => {
  const restaurant = props.restaurant;
  console.log(props);

  const getStarRating = (rating) => {
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
  };
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  function getPrice(number) {
    let dollars = " ";
    for (let i = 0; i < number; i++) {
      dollars += "$";
    }
    return dollars;
  }
  return (
    <Fragment>
      {console.log(restaurant)}
      {restaurant && (
        <div className='ranking-item'>
          <img
            className='restaurant-photo'
            src={`https://source.unsplash.com/${getRandomInt(200, 400)}x200/?restaurant`}
            alt=''
          />
          <div className='restaurant-name'>{restaurant.name}</div>
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

          <div className='more'>
            <i class='fas fa-hand-pointer'></i> Click here for more info
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default RankingItem;
