const initialState = {
  items: [],
  isLoaded: false,
};

const pizzasReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PIZZAS':
      let newSt = JSON.parse(JSON.stringify(state));
      return { ...newSt, items: action.payload, isLoaded: true };

    case 'SET_LOAD_STATUS':
      let newSta = JSON.parse(JSON.stringify(state));
      return {
        ...newSta,
        isLoaded: action.payload,
      };
    default:
      return state;
  }
};

export default pizzasReducer;
