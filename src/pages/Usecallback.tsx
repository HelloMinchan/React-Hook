import React, { useState, useMemo, useCallback } from "react";

function Usecallback() {
  const [list, setList]: [Array<number>, any] = useState([]);
  const [number, setNumber] = useState("");

  const getAverage = (numbers: any) => {
    console.log("평균값 계산중..");
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((a: any, b: any) => a + b);
    return sum / numbers.length;
  };

  const avg = useMemo(() => getAverage(list), [list]);

  const onChange = useCallback((e: any) => {
    console.log("zz");
    setNumber(e.target.value);
  }, []);

  const onInsert = useCallback(
    (e: any) => {
      console.log("asdfasdf");
      const nextList: Array<number> = list.concat(parseInt(number));
      setList(nextList);
      setNumber("");
    },
    [list, number]
  );

  return (
    <>
      <input value={number} onChange={onChange} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균 값 :</b>
        {avg}
      </div>
    </>
  );
}

export default Usecallback;
