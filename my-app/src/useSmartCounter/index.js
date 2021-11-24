import reducer from "./reducer";
import {useReducer} from "react";
import {decrease, increase} from "./actions";

export default function useSmartCounter(n = 0) {
  const [state, dispatch] = useReducer(reducer, {
    counter: n
  });

  return {
    counter: state.counter,

    addOne: () => dispatch(increase(1)),
    addFive: () => dispatch(increase(5)),

    removeOne: () => dispatch(decrease(1)),
    removeFive: () => dispatch(decrease(5)),
  }
}
