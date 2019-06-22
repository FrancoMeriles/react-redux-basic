import * as actionTypes from "./actionsTypes";

export const increment = () => {
  return {
    type: actionTypes.INCREMENT
  };
};
export const decrement = () => {
  return {
    type: actionTypes.DECREMENT
  };
};
export const add = c => {
  return {
    type: actionTypes.ADD,
    value: c
  };
};
export const subtract = c => {
  return {
    type: actionTypes.SUBTRACT,
    value: c
  };
};
