import React, { useEffect } from "react";
import { useForm } from "./UseForm";

function UseEffect() {
  const [values, handleChange] = useForm({
    email: "",
    password: "",
    fullname: "",
  });
  useEffect(() => {
    console.log("render");
  }, [values]);

  return (
    <div className="form">
      <input
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
    </div>
  );
}

export default UseEffect;
