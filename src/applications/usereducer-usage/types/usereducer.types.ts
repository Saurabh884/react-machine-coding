export type ActionTypes =
  | { type: "increment" }
  | { type: "decrement" }
  | { type: "reset" };

export interface UseReducerTypes {
  count: number;
}
