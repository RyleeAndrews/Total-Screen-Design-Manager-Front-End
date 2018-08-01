let defaultState = {init: true};

export default (state=defaultState, action) => {
  let {type,payload} = action;

  switch(type){
  case 'SET_AUTH_TOKEN':
    return {token:payload.token};

  case 'SET_AUTH_USER':
    return {token: payload.user};

  case 'DELETE_AUTH_TOKEN':
    return defaultState;

  case "UPDATE_USER": {
    console.log(state,payload);
    return Object.assign(state,payload);
  }

  case "DELETE_USER": {
    return Object.assign({...state,payload});
  }

  default:
    return state;

}
};
