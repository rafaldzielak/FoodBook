import React, { useState, useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { getRestaurants, setLoadingRestaurants } from "../actions/restaurants";
import { useParams } from "react-router-dom";

const Pagination = ({
  restaurants: { loading, foundRestaurants },
  city,
  sort,
  order,
  getRestaurants,
  setLoadingRestaurants,
}) => {
  const { id } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const cityToFind = city === "" ? id : city;
  useEffect(() => {
    //so it won't trigger 2x when refreshing page
    if (city !== "") {
      setLoadingRestaurants();
      getRestaurants(cityToFind, currentPage, sort, order);
      // console.log(foundRestaurants);
    }
  }, [currentPage, sort, city, setLoadingRestaurants, getRestaurants, order, cityToFind]);

  useEffect(() => {
    setCurrentPage(1);
  }, [city]);

  const disabledNav = [currentPage === 1, currentPage > 4];

  const changePage = (current, positionClicked) => {
    if (!(current === 1 && positionClicked === -1)) {
      setCurrentPage(current + positionClicked);
    }
  };

  return (
    <Fragment>
      {!loading && (
        <ul className='pagination center'>
          <li
            onClick={(e) => {
              changePage(currentPage, -1);
            }}
            className={`waves-effect page hide-on-small-only ${disabledNav[0] && "disabled"}`}>
            <i className='fas fa-chevron-left material-icons'></i>
          </li>
          <li onClick={(e) => changePage(1, 0)} className={`page ${currentPage === 1 && "act"}`}>
            1
          </li>
          <li onClick={(e) => changePage(0, 2)} className={`page ${currentPage === 2 && "act"}`}>
            2
          </li>
          <li onClick={(e) => changePage(0, 3)} className={`page ${currentPage === 3 && "act"} `}>
            3
          </li>
          <li onClick={(e) => changePage(0, 4)} className={`page ${currentPage === 4 && "act"} `}>
            4
          </li>
          <li onClick={(e) => changePage(0, 5)} className={`page ${currentPage === 5 && "act"}`}>
            5
          </li>
          <li
            onClick={(e) => changePage(currentPage, 1)}
            className={`page hide-on-small-only ${disabledNav[1] && "disabled"}`}>
            <i className='fas fa-chevron-right'></i>
          </li>
        </ul>
      )}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  restaurants: state.restaurant,
  city: state.city.city,
  sort: state.city.sort,
  order: state.city.order,
});

export default connect(mapStateToProps, { getRestaurants, setLoadingRestaurants })(Pagination);
