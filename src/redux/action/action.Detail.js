import { PACKEGE_PLANE, PACKEGE_TYPE, PACKEGE_TYPE_PRICE, START_DATE, TOTAL_PRICE, USER_CONTACT, USER_NAME } from "../type/Type";

export const Addname = (payload) => ({
  type: USER_NAME,
  payload,
});

export const Addcontact = (payload) => ({
  type: USER_CONTACT,
  payload,
});
export const PackageType = (payload) => ({
  type: PACKEGE_TYPE,
  payload,
});
export const Price = (payload) => (
  {
  type: PACKEGE_TYPE_PRICE,
  payload,
});
export const StartDate = (payload) => (
  {
  type: START_DATE,
  payload,
});
export const PackagePlane = (payload) => (
  {
  type: PACKEGE_PLANE,
  payload,
});
export const TotalPrice = (payload) => (
  {
  type: TOTAL_PRICE,
  payload,
});
