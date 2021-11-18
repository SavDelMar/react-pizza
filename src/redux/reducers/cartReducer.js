const initialState = {
  items: {},
  totalCount: 0,
  totalPrice: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PIZZA_TO_CART': {
      const obj = {
        ...state.items,
        [action.payload.id]: !state.items[action.payload.id]
          ? [action.payload]
          : [...state.items[action.payload.id], action.payload],
      };
      const allPizzasInCart = [].concat.apply([], Object.values(obj));
      const totalPrice = allPizzasInCart.reduce((sum, obj) => obj.price + sum, 0);

      return {
        ...state,
        items: obj,
        totalCount: allPizzasInCart.length,
        totalPrice: totalPrice,
      };
    }
    case 'REMOVE_ITEM_FROM_CART': {
      const obj = {
        ...state.items,
        [action.payload.id]:
          state.items[action.payload.id] && state.items[action.payload.id].slice(0, -1),
      };

      const allPizzasInCart = [].concat.apply([], Object.values(obj));
      const totalPrice = allPizzasInCart.reduce((sum, obj) => obj.price + sum, 0);

      return {
        ...state,
        items: obj,
        totalCount: allPizzasInCart.length,
        totalPrice: totalPrice,
      };
    }
    case 'REMOVE_ALL_THIS_TYPE_FROM_CART': {
      delete state.items[action.payload.id];
      const obj = {
        ...state.items,
      };
      const allPizzasInCart = [].concat.apply([], Object.values(obj));
      const totalPrice = allPizzasInCart.reduce((sum, obj) => obj.price + sum, 0);
      return {
        ...state,
        items: obj,
        totalCount: allPizzasInCart.length,
        totalPrice: totalPrice,
      };
    }
    case 'REMOVE_ALL_FROM_CART': {
      return {
        ...state,
        items: {},
        totalCount: 0,
        totalPrice: 0,
      };
    }
    case 'ADD_ITEM_TO_CART': {
      const obj = {
        ...state.items,
        [action.payload.id]: [...state.items[action.payload.id], action.payload],
      };
      console.log(obj);
      const allPizzasInCart = [].concat.apply([], Object.values(obj));
      const totalPrice = allPizzasInCart.reduce((sum, obj) => obj.price + sum, 0);

      return {
        ...state,
        items: obj,
        totalCount: allPizzasInCart.length,
        totalPrice: totalPrice,
      };
    }

    default:
      return state;
  }
};

export default cartReducer;
