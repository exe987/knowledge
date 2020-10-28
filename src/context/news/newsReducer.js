import {CHARGE_PAGE} from "../../Types/Types";
  
  export default (state, action) => {
    switch (action.type) {
      case CHARGE_PAGE:
        return{
          ...state,
          title: action.payload.title,
          article: action.payload.abstract,
        }


      default:
        return state;
    }
  };
  