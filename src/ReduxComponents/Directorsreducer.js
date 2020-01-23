import { getAll, gotData } from "../ReduxComponents/Directorsaction";

const initialState = {
  directors: [],
  director:{id:'',dname:''}
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "gotData": {
      // console.log(action);
      return {
        directors: action.json
      };
    }
    case "gotOne": {
      // console.log(action.json[0]);
      return {
        director: action.json[0]
      };
    }    

    case "addData": {
      console.log(action);
      // return {
      //   director: action.json[0]
      // };
    }


    // case 'del'
    default:
      return state;
  }
};
