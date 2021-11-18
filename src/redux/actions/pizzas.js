import axios from 'axios';

export const fetchPizzas = (category, sortBy) => (dispatch) => {
  dispatch(setLoadStatus(false));
  axios
    .get(
      `/pizzas?${category.catIndex ? `category=${category.catIndex}&` : ''}_sort=${
        sortBy.type
      }&_order=${sortBy.order}`,
    )
    .then(({ data }) => {
      dispatch(setPizzas(data));
    });
};

export const setLoadStatus = (isLoaded) => ({
  type: 'SET_LOAD_STATUS',
  payload: isLoaded,
});

export const setPizzas = (items) => ({
  type: 'SET_PIZZAS',
  payload: items,
});
