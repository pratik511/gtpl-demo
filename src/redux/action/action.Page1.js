import { USER_CONTACT, USER_NAME } from "../type/Type";

export const name = (payload) => ({
  type: USER_NAME,
  payload,
});

export const contact = (payload) => ({
  type: USER_CONTACT,
  payload,
});
