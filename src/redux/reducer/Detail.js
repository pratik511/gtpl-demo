import { USER_NAME, USER_CONTACT } from "../type/Type";
import { initialState } from "../initialState";

export const Detail = (state = initialState, action) => {
  switch (action.type) {
    case USER_NAME:

      return {
          ...state,
          Name:action.payload                                                                                                                                                                                                                                                                                                                                                                                                 
      } 
    case USER_CONTACT:
      return {
        ...state,
        Contact:action.payload 
      }
    default:
      return state;
  }
};