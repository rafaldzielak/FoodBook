import React, { Fragment, useRef, useState } from "react";
import { Modal, Preloader, Col, Button } from "react-materialize";
import { clearReviews, getReviews } from "../actions/reviews";
import { connect } from "react-redux";

const ZoomedRankingItem = ({
  restaurant,
  wrappedInfo,
  getReviews,
  clearReviews,
  reviews,
  loading,
  getStarRating,
}) => {
  const isInModal = useRef(false);
  const printReviews = (number) => {
    for (let i = 0; i < 3; i++) {
      if (reviews.reviews && reviews.reviews.length >= number) {
        return (
          <div className={`review-${number}`}>
            <div className='divider'></div>
            <p>
              {getStarRating(reviews.reviews[number].review.rating)}{" "}
              {reviews.reviews[number].review.rating_text} -{" "}
              <span className='grey-text '>
                {reviews.reviews[number].review.review_time_friendly}
              </span>
            </p>
            <p className='review truncate'>{reviews.reviews[number].review.review_text}</p>
          </div>
        );
      }
    }
  };

  const getFavouriteFromLS = () => {
    let favRestaurants;
    if (localStorage.getItem("favouriteRestaurants") === null) {
      return [];
    } else {
      return JSON.parse(localStorage.getItem("favouriteRestaurants"));
    }
  };

  const checkIfIsFav = (id) => {
    let favRestaurants = getFavouriteFromLS();
    if (favRestaurants.includes(id)) return true;
    else return false;
  };
  const [isFav, setIsFav] = useState(checkIfIsFav(restaurant.id));

  const toggleFavourites = () => {
    let favRestaurants = getFavouriteFromLS();
    const index = favRestaurants.indexOf(restaurant.id);
    if (index > -1) {
      favRestaurants.splice(index, 1);
    } else {
      favRestaurants.push(restaurant.id);
    }
    localStorage.setItem("favouriteRestaurants", JSON.stringify(favRestaurants));
    setIsFav((prevState) => !prevState);
  };
  return (
    <Fragment>
      <Modal
        bottomSheet={false}
        fixedFooter={false}
        header={
          <Fragment>
            <Button
              tooltip={`${
                isFav ? "Remove The Restaurant from" : "Add The Restaurant to"
              } Your Favourites`}
              className=''
              onClick={toggleFavourites}
              // node='button'
              style={{
                marginRight: "0px",
              }}>
              {/* <i class='material-icons left'>cloud</i> */}
              {isFav ? <i className='fas fa-heart'></i> : <i className='far fa-heart'></i>}
            </Button>{" "}
            {restaurant.name}
          </Fragment>
        }
        id='Modal-0'
        open={false}
        options={{
          dismissible: true,
          endingTop: "10%",
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: () => clearReviews(),
          onOpenEnd: null,
          onOpenStart: () => {
            getReviews(restaurant.id);
            // setIsInModal(true);
            isInModal.current = true;
          },
          opacity: 0.8,
          outDuration: 250,
          preventScrolling: true,
          startingTop: "4%",
        }}
        // root={[object HTMLBodyElement]}
        trigger={<span className='pointer'> Click here for more info</span>}>
        <div className='ranking-item big'>
          {/* {getReviews(restaurant.id)} */}
          {/* <img className='restaurant-photo-big' src={restaurant.photo} alt='' /> */}
          {wrappedInfo()}
          {/* <a class='waves-effect waves-light btn'>
            <i class='material-icons left'>cloud</i>button
          </a> */}
          <div className='header-right'>Latest reviews:</div>
          {loading && isInModal && (
            <Col className='center review-2' s={4}>
              <Preloader className='center' active color='red' flashing={false} size='big' />
            </Col>
          )}

          {printReviews(1)}
          {printReviews(2)}
          {printReviews(3)}
        </div>
      </Modal>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  reviews: state.review.reviews,
  loading: state.review.loading,
});

export default connect(mapStateToProps, { getReviews, clearReviews })(ZoomedRankingItem);
// export default ZoomedRankingItem;
