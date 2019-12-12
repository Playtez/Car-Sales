import React from "react";
import { connect } from "react-redux";

import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";

import { buyItem } from "./components/actions/actions";

const App = ({ additionalPrice, additionalFeatures, car, buyItem }) => {
  const removeFeature = item => {
    // dispatch an action here to remove an item
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={car} />
        <AddedFeatures car={car} />
      </div>
      <div className="box">
        <AdditionalFeatures
          buyItem={buyItem}
          additionalFeatures={additionalFeatures}
        />
        <Total car={car} additionalPrice={additionalPrice} />
      </div>
    </div>
  );
};

const mapToStateProps = ({
  additionalPrice,
  additionalFeatures,
  car,
  buyItem
}) => {
  return {
    additionalPrice,
    additionalFeatures,
    car,
    buyItem
  };
};
export default connect(mapToStateProps, { buyItem })(App);
