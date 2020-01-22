import { getAll } from "../ReduxComponents/Directorsaction";

const initialState = {
  movies: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case getAll: {
      return {
        movies: action.json
      };
    }
    default:
      return state;
  }
};
