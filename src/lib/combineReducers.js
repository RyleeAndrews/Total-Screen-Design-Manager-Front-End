import {combineReducers} from 'redux';

import authReducer from '../components/auth/authreducer.js';
import orderReducer from '../components/orders/reducer.js';

export default combineReducers({
  auth: authReducer,
  orders: orderReducer,
});
