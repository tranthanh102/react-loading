export const plus = (number) => ({
  type: "PLUS_1",
  payload: number,
});
export const minus = (number) => ({
  type: "MINUS_1",
  payload: number,
});
export const plus = (number) => ({
  type: "PLUS_10",
  payload: number,
});
export const minus = (number) => ({
  type: "MINUS_10",
  payload: number,
});
export const duplicated = (number) => ({
  type: "DUPLICATED_X2",
  payload: number,
});
export const reset = (number) => ({
  type: "RESET_NUMBER",
  payload: number,
});
