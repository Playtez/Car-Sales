export const ADD_FEATURE = "ADD_FEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE";

export const addFeature = feature => {
  return { type: ADD_FEATURE, payload: feature };
  // dipsatch an action here to add an item
};
export const removeFeature = feature => {
  return { type: REMOVE_FEATURE, payload: feature };
  // dipsatch an action here to remove an item
};
