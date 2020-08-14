import React, { useReducer, useContext, useEffect } from "react";
import { ContextStore } from "../App";

function Usereducer({
  setContextValue1,
  setContextValue2,
  setContextEmail,
  setContextPassword,
}: any) {
  const {
    contextValue1,
    contextValue2,
    contextEmail,
    contextPassword,
  }: any = useContext(ContextStore);

  function valueReducer(valueState: any, action: any) {
    switch (action.type) {
      case "+1INCREMENT":
        return { value1: valueState.value1 + 1, value2: valueState.value2 };
      case "-1DECREMENT":
        return { value1: valueState.value1 - 1, value2: valueState.value2 };
      case "+2INCREMENT":
        return { value1: valueState.value1, value2: valueState.value2 + 2 };
      case "-2DECREMENT":
        return { value1: valueState.value1, value2: valueState.value2 - 2 };
      default:
        return valueState;
    }
  }

  function infoReducer(infoState: any, infoAction: any) {
    return {
      ...infoState,
      [infoAction.name]: infoAction.value,
    };
  }

  const onChange = (e: any) => {
    infoDispatch(e.target);
  };

  const [valueState, valueDispatch] = useReducer(valueReducer, {
    value1: contextValue1,
    value2: contextValue2,
  });

  const [infoState, infoDispatch] = useReducer(infoReducer, {
    email: contextEmail,
    password: contextPassword,
  });

  useEffect(() => {
    setContextValue1(valueState.value1);
    setContextValue2(valueState.value2);
    setContextEmail(infoState.email);
    setContextPassword(infoState.password);
  }, [
    valueState.value1,
    valueState.value2,
    setContextValue1,
    setContextValue2,
    infoState.email,
    infoState.password,
    setContextEmail,
    setContextPassword,
  ]);

  return (
    <>
      <p>
        useReducer를 이용한 1씩 증감하는 value1 값은 <b>{valueState.value1}</b>
        이다람쥐!
      </p>
      <p>
        useReducer를 이용한 2씩 증감하는 value2 값은 <b>{valueState.value2}</b>
        이다람쥐!
      </p>
      <button onClick={() => valueDispatch({ type: "+1INCREMENT" })}>
        value1 +1이다람쥐
      </button>
      <button onClick={() => valueDispatch({ type: "-1DECREMENT" })}>
        value1 -1이다람쥐
      </button>
      <button onClick={() => valueDispatch({ type: "+2INCREMENT" })}>
        value2 +2이다람쥐
      </button>
      <button onClick={() => valueDispatch({ type: "-2DECREMENT" })}>
        value2 -2이다람쥐
      </button>
      <hr />

      <h1>이메일 비밀번호 변경</h1>
      <input name="email" value={infoState.email} onChange={onChange} />
      <input name="password" value={infoState.password} onChange={onChange} />

      <div>
        <b>context 이메일:</b>
        {infoState.email}
      </div>
      <div>
        <b>context 비밀번호:</b>
        {infoState.password}
      </div>
    </>
  );
}

export default Usereducer;
