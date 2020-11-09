import React from "react";
import { Col, Dropdown, Button, Icon, Divider } from "react-materialize";
import { setSorting, clearSorting } from "../actions/city";
import { connect } from "react-redux";
import noFilter from "./no-filter.png";

const Sort = ({ setSorting, clearSorting }) => {
  return (
    <Col l={2} m={3} s={3}>
      <Dropdown
        className='p-t2'
        id='Dropdown_6'
        options={{
          alignment: "right",
          autoTrigger: true,
          closeOnClick: true,
          constrainWidth: true,
          container: null,
          coverTrigger: true,
          hover: false,
          inDuration: 150,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          outDuration: 250,
        }}
        trigger={
          <Button node='button'>
            <Icon className='sort-icon'>sort</Icon>
          </Button>
        }>
        <p className='dropdown-elem' onClick={(e) => setSorting("cost")}>
          <Icon className='dollar-green' small>
            attach_money
          </Icon>
        </p>
        <Divider />
        <p className='dropdown-elem' onClick={(e) => setSorting("rating")}>
          <i className='fas fa-star gold'></i>
          <i className='fas fa-star gold'></i>
          <i className='fas fa-star gold'></i>
        </p>
        <Divider />
        <p className='dropdown-elem' onClick={(e) => clearSorting()}>
          <img className='no-filter' src={noFilter} alt='AAA' />
        </p>
      </Dropdown>
    </Col>
  );
};

export default connect(null, { setSorting, clearSorting })(Sort);
