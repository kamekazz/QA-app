import * as actionTypes from "./types";

/* User Actions */
export const setUser = (user) => {
  return {
    type: actionTypes.SET_USER,
    payload: {
      currentUser: user,
    },
  };
};

export const clearUser = () => {
  return {
    type: actionTypes.CLEAR_USER,
  };
};

/* incoming item */
export const acAddIncomingItem = (_itemData) => {
  return {
    type: actionTypes.ADD_INCOMING_ITEM,
    payload: {
      item: _itemData,
    },
  };
};

export const acAddIncomingItemPo = (_po) => {
  return {
    type: actionTypes.ADD_INCOMING_ITEM_PO,
    payload: {
      poNumber: _po,
    },
  };
};

export const acAddIncomingItemContainer = (_containerId) => {
  return {
    type: actionTypes.ADD_INCOMING_ITEM_CONTAINER,
    payload: {
      containerId: _containerId,
    },
  };
};
