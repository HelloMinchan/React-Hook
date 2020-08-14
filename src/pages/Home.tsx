import React, { useContext } from "react";
import { ContextStore } from "../App";

function Home() {
  const { token, contextValue1, contextValue2 }: any = useContext(ContextStore);
  return (
    <>
      <div>React Hook을 정복하자규!</div>
      <hr />
      <p>현재 token값이 다람쥐 : {token}</p>
      <p>현재 contextValue1값이 다람쥐 : {contextValue1}</p>
      <p>현재 contextValue2값이 다람쥐 : {contextValue2}</p>
    </>
  );
}

export default Home;
