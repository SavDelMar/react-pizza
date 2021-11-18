import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import filtersReducer from './filterReducer';
import pizzasReducer from './pizzasReducer';
const rootReducer = combineReducers({
  filters: filtersReducer,
  pizzas: pizzasReducer,
  cart: cartReducer,
});

export default rootReducer;
