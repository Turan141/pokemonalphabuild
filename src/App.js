import { useSelector, useDispatch } from "react-redux";
import { Users } from "./Users";
import React from "react";
import { decrement, increment } from "../src/redux/counter";
import "./styles.css";

export default function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <Users />
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
    </div>
  );
}
