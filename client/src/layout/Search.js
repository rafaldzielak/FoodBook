import React, { useState } from "react";
import { setAlert } from "../actions/alert";
import { getRestaurants } from "../actions/restaurants";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setCity } from "../actions/city";
import "materialize-css";
import { Collapsible, CollapsibleItem, Icon, Checkbox, Button, Modal } from "react-materialize";

const Search = ({ city, setCity, setAlert, getRestaurants }) => {
  const [cityInput, setCityInput] = useState("");
  const searchForRestaurantsInCity = (e) => {
    e.preventDefault();
    setCity(cityInput);
    setCityInput("");
  };

  return (
    <div>
      <div class='row'>
        <form class='col s12' onSubmit={(e) => searchForRestaurantsInCity(e)}>
          <div class='row'>
            <div class='input-field col s12'>
              <i class='material-icons prefix'>location_city</i>
              <input
                placeholder='Search for the city'
                id='icon_prefix'
                type='text'
                value={cityInput}
                onChange={(e) => setCityInput(e.target.value)}
              />
            </div>
          </div>
        </form>
      </div>
      <Modal
        actions={[
          <Button flat modal='close' node='button' waves='green'>
            Close
          </Button>,
        ]}
        bottomSheet={false}
        fixedFooter={false}
        header='Modal Header'
        id='Modal-0'
        open={false}
        options={{
          dismissible: true,
          endingTop: "10%",
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          opacity: 0.5,
          outDuration: 250,
          preventScrolling: true,
          startingTop: "4%",
        }}
        // root={[object HTMLBodyElement]}
        trigger={<Button node='button'>MODAL</Button>}>
        <Checkbox id='Checkbox_3' label='$' value='$' />
        <br />
        <Checkbox id='Checkbox_3' label='$$' value='$$' />
        <br />
        <Checkbox id='Checkbox_3' label='$$$' value='$$$' />
        <br />
        <Checkbox id='Checkbox_3' label='$$$$' value='Re$$$d' />
        <br />
      </Modal>
      <Collapsible accordion>
        <CollapsibleItem
          expanded={false}
          header='Filter'
          icon={<Icon>filter_list</Icon>}
          node='div'>
          Price: <br />
          <Checkbox id='Checkbox_3' label='$' value='Red' />
          <br />
          <Checkbox id='Checkbox_3' label='$$' value='Red' />
          <br />
          <Checkbox id='Checkbox_3' label='$$$' value='Red' />
          <br />
          <Checkbox id='Checkbox_3' label='$$$$' value='Red' />
          <br />
        </CollapsibleItem>
      </Collapsible>
    </div>
  );
};

Search.propTypes = {
  setAlert: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  city: state.city.city,
});

export default connect(mapStateToProps, { setAlert, getRestaurants, setCity })(Search);
