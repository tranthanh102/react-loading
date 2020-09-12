import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const TodoCount = (props) => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);
  return (
    <div>
      <h1>Simple Counter</h1>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}></button>
      <button onClick={() => setCount(count - 1)}></button>
      <p>{number}</p>
      <button onClick={() => setNumber(number + 10)}></button>
      <button onClick={() => setNumber(number - 10)}></button>
    </div>
  );
};
export default TodoCount;
