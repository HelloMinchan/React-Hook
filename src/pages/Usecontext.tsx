import React, { useContext } from "react";
import { ContextStore } from "../App";

function Usecontext({ setToken }: any) {
  const { token }: any = useContext(ContextStore);

  const handleTempText = (e: any) => {
    setToken(e.target.value);
  };

  return (
    <div>
      <div>{token}</div>
      <div>
        Context를 이용해 값을 바꿔보자!{" "}
        <input
          value={token}
          onChange={handleTempText}
          placeholder={"token값이다람쥐"}
        ></input>
      </div>
    </div>
  );
}

export default Usecontext;
