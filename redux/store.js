import { createStore } from 'redux';
import exampleReducer from "./reducers/homePageReducer";

export const actionExample = () => {
  return {
    type: 'Example'
  };
};

const reduxStore = createStore(exampleReducer);
export default reduxStore;
