import React, { useRef, useState } from "react";
import { useForm } from "./UseForm";

function UseState() {
  const [count1, setCount1] = useState(10);
  const [count2, setCount2] = useState(20);
  const [values, handleChange] = useForm({
    email: "",
    password: "",
    fullname: "",
  });
  const inputRef = useRef();
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
      <div className="forms">
        <h3>Implementing UseRef</h3>
        <input
          ref={inputRef}
          name="email"
          placeholder="abc@Abc.com"
          value={values.email}
          onChange={handleChange}
        />
        <input
          name="firstname"
          placeholder="your fullname"
          value={values.firstname}
          onChange={handleChange}
        />
        <input
          name="password"
          placeholder="*******"
          value={values.password}
          onChange={handleChange}
        />
        <br />
        <button
          className="btn1"
          onClick={() => {
            inputRef.current.focus();
          }}
        >
          <b>FOCUS</b>
        </button>
      </div>
    </div>
  );
}

export default UseState;
