const initialState = 0;

const exampleReducer = (state = initialState, action) => {
  if (action.type === 'Example') {
    return state + 1;
  }
  return state;
};

export default exampleReducer;