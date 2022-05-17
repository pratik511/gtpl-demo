import { USER_CONTACT, USER_NAME } from "../type/Type";

export const Addname = (payload) => ({
  type: USER_NAME,
  payload,
});

export const Addcontact = (payload) => ({
  type: USER_CONTACT,
  payload,
});
