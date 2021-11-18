export const setSortBy = (type, index, order) => {
  return {
    type: 'SET_SORT_BY',
    payload: { type: type, index: index, order: order },
  };
};

export const setCategory = (catIndex, catName) => {
  return {
    type: 'SET_CATEGORY',
    payload: { catName: catName, catIndex: catIndex },
  };
};
