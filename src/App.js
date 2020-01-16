import React from "react";
import { connect } from "react-redux";

import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";

import { addFeature, removeFeature } from "./components/actions/actions";

const App = ({
  additionalPrice,
  additionalFeatures,
  car,
  addFeature,
  removeFeature
}) => {
  return (
    <div className="boxes">
      <div className="box">
        <Header car={car} />
        <AddedFeatures removeFeature={removeFeature} car={car} />
      </div>
      <div className="box">
        <AdditionalFeatures
          addFeature={addFeature}
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
  addFeature,
  removeFeature
}) => {
  return {
    additionalPrice,
    additionalFeatures,
    car,
    addFeature,
    removeFeature
  };
};
export default connect(mapToStateProps, { addFeature, removeFeature })(App);
