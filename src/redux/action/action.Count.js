import { BACK_PAGE, NEXT_PAGE } from "../type/Type";

export const nextPage = (payload) => ({
  type: NEXT_PAGE,
  payload,
  });
  
  export const backPage = (payload) => ({
    type: BACK_PAGE,
    payload,
  });

  