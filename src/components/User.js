import React from "react";
import { useState } from "react";

function User({ name, topic }) {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(10);
  return (
    <div className="user-card">
      <h2>Name : {name}</h2>
      <h3>Topic : {topic}</h3>
      <h4> Count1 = {count}</h4>
      <h4> Count2 = {count2}</h4>

      <button onClick={() => setCount(count++)}>Increase</button>
    </div>
  );
}

export default User;
