import * as actionTypes from "./actionsTypes";

const saveResult = r => {
  return {
    type: actionTypes.STORE_RESULT,
    result: r
  };
};

export const storeResult = r => {
  return (dispatch, getState) => {
    setTimeout(() => {
      // const oldCounter = getState().ctr.counter;
      // console.log(oldCounter);
      dispatch(saveResult(r));
    }, 2000);
  };
};

export const deleteResult = id => {
  return {
    type: actionTypes.DELETE_RESULT,
    id: id
  };
};
