export const addPizzaToCart = (obj) => {
  return {
    type: 'ADD_PIZZA_TO_CART',
    payload: obj,
  };
};
export const removeItemFromCart = (obj) => {
  return {
    type: 'REMOVE_ITEM_FROM_CART',
    payload: obj,
  };
};
export const addItemToCart = (obj) => {
  return {
    type: 'ADD_ITEM_TO_CART',
    payload: obj,
  };
};
export const removeAllThisTypeFromCart = (obj) => {
  return {
    type: 'REMOVE_ALL_THIS_TYPE_FROM_CART',
    payload: obj,
  };
};

export const removeAllFromCart = () => {
  return {
    type: 'REMOVE_ALL_FROM_CART',
    payload: [],
  };
};
