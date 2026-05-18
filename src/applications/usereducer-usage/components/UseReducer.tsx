import { useReducer } from "react";
import type { UseReducerTypes, ActionTypes } from "../types/usereducer.types";

const intitialState: UseReducerTypes = {
  count: 0,
};

const reducer = (
  state: UseReducerTypes,
  action: ActionTypes,
): UseReducerTypes => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };

    case "decrement":
      return { count: state.count - 1 };

    case "reset":
      return { count: 0 };

    default:
      return state;
  }
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, intitialState);
  return (
    <div>
      <h2>Count:{state.count}</h2>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default UseReducer;
