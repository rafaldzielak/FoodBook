import React, { useState, useEffect, Fragment, useMemo, useRef } from "react";
import { connect } from "react-redux";
import { getRestaurants } from "../actions/restaurants";
import { Link } from "react-router-dom";

const Pagination = ({ restaurants: { restaurants, loading }, city, getRestaurants }) => {
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    console.log(city);
    getRestaurants(city, currentPage);
  }, [currentPage, city]);

  const disabledPages = [currentPage === 1, currentPage > 4];

  const changePage = (current, positionClicked) => {
      if (!(current === 1 && positionClicked === -1)){
        setCurrentPage(current + positionClicked);
      }
      
  };

  return (
    <Fragment>
      {!loading && (
        <ul class='pagination center'>
          <li onClick={e=> {changePage(currentPage, -1)}} className={`waves-effect page ${disabledPages[0] && "disabled"}`}>
            <i class='fas fa-chevron-left material-icons'></i>
          </li>
          <li onClick={e=> {changePage(currentPage, 0)}} className="page act">{currentPage}</li>
          <li onClick={e=> {changePage(currentPage, 1)}} className="page">{currentPage + 1}</li>
          <li onClick={e=> {changePage(currentPage, 2)}} className="page">{currentPage + 2}</li>
          <li onClick={e=> {changePage(currentPage, 3)}} className="page">{currentPage + 3}</li>
          <li onClick={e=> {changePage(currentPage, 4)}} className="page">{currentPage + 4}</li>
          <li onClick={e=> {changePage(currentPage, 1)}} className={`page ${disabledPages[1] && "disabled"}`}>
            <i class='fas fa-chevron-right'></i>
          </li>
        </ul>
      )}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  restaurants: state.restaurant,
  city: state.city.city,
});

export default connect(mapStateToProps, { getRestaurants })(Pagination);