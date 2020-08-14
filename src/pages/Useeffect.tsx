import React, { useEffect, useState, useContext } from "react";
import { ContextStore } from "../App";

function Useeffect() {
  const { token }: any = useContext(ContextStore);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
    return () => {
      alert(
        `나는 useEffect의 뒷 정리 함수로 언마운트 직전에 호출 된 alert이라고한다람쥐\n 현재 context에 저장된 token은 ${token}`
      );
    };
  }, [token]);

  if (loading) {
    return (
      <div>
        <h1>Loading......</h1>
        현재 useEffect를 이용한 loading 변수가 true라 settimeout으로 5초후
        false가 되면 로딩 끝남
      </div>
    );
  } else {
    return (
      <div>
        setTimeout 5초지나서 useEffect를 이용한 loading 변수가 false가 됨
      </div>
    );
  }
}

export default Useeffect;
