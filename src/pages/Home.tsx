import React, { useContext } from "react";
import { ContextStore } from "../App";

function Home() {
  const {
    token,
    contextValue1,
    contextValue2,
    contextEmail,
    contextPassword,
  }: any = useContext(ContextStore);
  return (
    <>
      <p>현재 contextEmail값이 다람쥐 : {contextEmail}</p>
      <p>현재 contextPassword값이 다람쥐 : {contextPassword}</p>
      <p>현재 token값이 다람쥐 : {token}</p>
      <p>현재 contextValue1값이 다람쥐 : {contextValue1}</p>
      <p>현재 contextValue2값이 다람쥐 : {contextValue2}</p>
    </>
  );
}

export default Home;
