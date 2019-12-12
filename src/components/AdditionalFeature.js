import React from "react";
// import { buyItem } from "./actions/actions";

const AdditionalFeature = props => {
  console.log(props.buyItem());

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={props.buyItem} className="button">
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
