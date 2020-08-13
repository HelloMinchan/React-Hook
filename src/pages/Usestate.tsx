import React, { useState } from "react";

function Usestate() {
  const [value, setValue] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInputEmail = (e: any) => {
    setEmail(e.target.value);
  };

  const handleInputPassword = (e: any) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <div>useState다람쥐</div>
      <p>
        현재 useState로 관리되는 value 변수의 값 : <b>{value}</b>
      </p>
      <button onClick={() => setValue(value + 1)}>+다람쥐</button>
      <button onClick={() => setValue(value - 1)}>-다람쥐</button>

      <hr />

      <div>
        <input
          value={email}
          onChange={handleInputEmail}
          placeholder={"이메일이다람쥐"}
        />
        <input
          value={password}
          onChange={handleInputPassword}
          placeholder={"비밀번호다람쥐"}
        />
      </div>

      <div>
        <b>이메일:</b>
        {email}
      </div>
      <div>
        <b>비밀번호:</b>
        {password}
      </div>
    </div>
  );
}

export default Usestate;
