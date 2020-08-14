import React, { useReducer, useContext, useEffect } from "react";
import { ContextStore } from "../App";

function Usereducer({ setContextValue1, setContextValue2 }: any) {
  const { contextValue1, contextValue2 }: any = useContext(ContextStore);

  function reducer(state: any, action: any) {
    switch (action.type) {
      case "+1INCREMENT":
        return { value1: state.value1 + 1, value2: state.value2 };
      case "-1DECREMENT":
        return { value1: state.value1 - 1, value2: state.value2 };
      case "+2INCREMENT":
        return { value1: state.value1, value2: state.value2 + 2 };
      case "-2DECREMENT":
        return { value1: state.value1, value2: state.value2 - 2 };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, {
    value1: contextValue1,
    value2: contextValue2,
  });

  useEffect(() => {
    setContextValue1(state.value1);
    setContextValue2(state.value2);
  }, [state.value1, state.value2, setContextValue1, setContextValue2]);

  return (
    <>
      <p>
        useReducer를 이용한 1씩 증감하는 value1 값은 <b>{state.value1}</b>
        이다람쥐!
      </p>
      <p>
        useReducer를 이용한 2씩 증감하는 value2 값은 <b>{state.value2}</b>
        이다람쥐!
      </p>
      <button onClick={() => dispatch({ type: "+1INCREMENT" })}>
        value1 +1이다람쥐
      </button>
      <button onClick={() => dispatch({ type: "-1DECREMENT" })}>
        value1 -1이다람쥐
      </button>
      <button onClick={() => dispatch({ type: "+2INCREMENT" })}>
        value2 +2이다람쥐
      </button>
      <button onClick={() => dispatch({ type: "-2DECREMENT" })}>
        value2 -2이다람쥐
      </button>
    </>
  );
}

export default Usereducer;
