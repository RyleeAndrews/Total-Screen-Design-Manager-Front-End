'use strict';

let initialState = [];

export default (state=initialState, action) => {

  let {type, payload} = action;

  switch(type) {

  case 'ORDER_INIT':
    return payload || initialState;

  case 'ORDER_CREATE':
    console.log('payload', payload);
    return [...state, payload];

  case 'ORDER_UPDATE':
    return state.map(order => order._id === payload._id ? payload : order);

  case 'ORDER_DELETE':
    return state.filter(order => order._id !== payload);

  case 'ORDER_RESET':
    return initialState;

  default:
    return state;
  }

};
