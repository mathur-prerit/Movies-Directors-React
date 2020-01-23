import { getAll, gotData } from "../ReduxComponents/Directorsaction";

const initialState = {
  directors: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "gotData": {
      // console.log(action);
      return {
        directors: action.json
      };
    }
    

    // case 'del'
    default:
      return state;
  }
};
