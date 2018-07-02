let initialState = [];

export default (state = initialState, action) => {

  let {type,payload} = action;

  switch(type){

  case 'CREATE':
    return [...state,payload];

  case 'UPDATE':
    return state.map( i => i._id === payload._id ? payload : i);

  case 'DELETE':
    return state.filter( i => i._id !== payload);

  case 'RESET':
    return initialState;

  default:
    return state;
  }
};
