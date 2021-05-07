import React, { useState } from "react";

function UseState() {
  const [count1, setCount1] = useState(10);
  const [count2, setCount2] = useState(20);
  return (
    <div className="usestate">
      <div className="buttons">
        <button
          style={{ outlineWidth: "0", fontSize: "60px" }}
          className="btn1"
          onClick={() => {
            setCount1(count1 + 1);
            setCount2(count2 + 1);
          }}
        >
          +
        </button>
        <button
          style={{ outlineWidth: "0", fontSize: "60px" }}
          className="btn1"
          onClick={() => {
            setCount1(count1 - 1);
            setCount2(count2 - 1);
          }}
        >
          -
        </button>
      </div>
      <div style={{ display: "flex" }}>
        <h4>Count 1 : {count1}</h4>
      </div>
      <br />
      <div style={{ display: "flex" }}>
        <h4>Count 2 : {count2}</h4>
      </div>
    </div>
  );
}

export default UseState;
