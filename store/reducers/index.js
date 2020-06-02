import { combineReducers } from "redux";
import * as actionTypes from "../actions/types";

const initialUserState = {
  currentUser: null,
  isLoading: true,
};

const user_reducer = (state = initialUserState, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        currentUser: action.payload.currentUser,
        isLoading: false,
      };
    case actionTypes.CLEAR_USER:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
//////////////////////////////////////////////////////////////////
const incomingItemState = {
  item: null,
  poNumber: "",
  containerId: "",
};

const incoming_item_reducer = (state = incomingItemState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INCOMING_ITEM:
      return {
        ...state,
        item: action.payload.item,
      };
    case actionTypes.ADD_INCOMING_ITEM_PO:
      return {
        ...state,
        poNumber: action.payload.poNumber,
      };
    case actionTypes.ADD_INCOMING_ITEM_CONTAINER:
      return {
        ...state,
        containerId: action.payload.containerId,
      };
    default:
      return state;
  }
};
//////////////////////////////////////////////////////////////////

const rootReducer = combineReducers({
  user: user_reducer,
  incoming: incoming_item_reducer,
});

export default rootReducer;
