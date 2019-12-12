import React from "react";

const AddedFeature = props => {
  console.log("this is props in AddedFeature", props);
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button
        onClick={() => console.log(props, "hey its props")}
        className="button"
      >
        X
      </button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
