import React, { useState } from "react";

function Usestate() {
  const [value, setValue] = useState(0);

  return (
    <div>
      <div>useState다람쥐</div>
      <p>
        현재 useState로 관리되는 value 변수의 값 : <b>{value}</b>
      </p>
      <button onClick={() => setValue(value + 1)}>+다람쥐</button>
      <button onClick={() => setValue(value - 1)}>-다람쥐</button>
    </div>
  );
}

export default Usestate;
