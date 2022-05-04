import { USER_NAME, USER_CONTACT } from "../type/Type";
import { initialState } from "../initialState";

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_NAME:
      return {
          ...state,
          Name:action.payload
      } 
    case USER_CONTACT:
      return state.Contact ;
    default:
      return state;
  }
};