//Action Type
//Action type property string - > constant
// "ADD_TODO", "DELETE_TODO"

const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";
const INCREASE_BY_AMOUNT = "counter/INCREASE_BY_AMOUNT";

//Action Creator
//Action object function

export const increaseCounter = () => {
  return {
    type: INCREASE,
  };
};

export const decreaseCounter = () => {
  return {
    type: DECREASE,
  };
};

export const increaseByAmountCounter = (amount) => {
  return {
    type: INCREASE_BY_AMOUNT,
    payload: amount,
  };
};

// Reducer
// increase, decrease
const INITIAL_STATE = 0;
function counterReducer(prevState = INITIAL_STATE, action) {
  //switch
  //if

  if (action.type === INCREASE) {
    return prevState + 1;
  }

  if (action.type === DECREASE) {
    return prevState - 1;
  }

  if (action.type === INCREASE_BY_AMOUNT) {
    return prevState + action.payload;
  }

  return prevState;
}

export default counterReducer;
