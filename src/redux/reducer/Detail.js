import { USER_NAME, USER_CONTACT,PACKEGE_TYPE, PACKEGE_TYPE_PRICE, START_DATE, PACKEGE_PLANE, TOTAL_PRICE } from "../type/Type";
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
    case PACKEGE_TYPE:
      return {
        ...state,
        Package_Type:action.payload 
      }
    case PACKEGE_TYPE_PRICE:
      return {
        ...state,
        Price:action.payload 
      }
    case START_DATE:
      return {
        ...state,
        Start_Date:action.payload 
      }
    case PACKEGE_PLANE:
      return {
        ...state,
        Package_Plane:action.payload 
      }
    case TOTAL_PRICE:
      return {
        ...state,
        Total_Price:action.payload 
      }
    default:
      return state;
  }
};