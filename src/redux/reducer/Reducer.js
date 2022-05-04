import { NEXT_PAGE,BACK_PAGE } from "../type/Type";
import { initialState } from "../initialState";

export const Reducer = (state = initialState.Page, action) => {
  switch (action.type) {
    case NEXT_PAGE:
      return state + 1;
    case BACK_PAGE:
      return state - 1;
    default:
      return state;
  }
};