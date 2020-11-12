import React, { Fragment, useRef } from "react";
import { Modal, Preloader, Col } from "react-materialize";
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
  return (
    <Fragment>
      <Modal
        bottomSheet={false}
        fixedFooter={false}
        header={restaurant.name}
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
