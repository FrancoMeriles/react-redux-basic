import * as actionTypes from "../actions/actionsTypes";
import { updateObject } from "../utility";

const initialState = {
  results: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return updateObject(state, {
        results: state.results.concat({ id: new Date(), value: action.result })
      });
    // return {
    //   ...state,
    //   results: state.results.concat({ id: new Date(), value: action.result })
    // };
    case actionTypes.DELETE_RESULT:
      // const id = 2;
      // const newArray = [...state.results];
      // newArray.splice(id, 1);
      const newFilterArray = state.results.filter(
        result => result.id !== action.id
      );
      return updateObject(state, { results: newFilterArray });
    // return {
    //   ...state,
    //   results: newFilterArray
    // };
  }
  return state;
};

export default reducer;
