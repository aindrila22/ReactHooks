import React, { useState, useLayoutEffect } from "react";

const UseLayoutEffectPage = () => {
  const [value, setValue] = useState(0);

  //useLayoutEffect is identical to useEffect, but it’s major key difference is that it gets triggered synchronously after all DOM mutation
  //This hook is optimized, to allow the engineer to make changes to a DOM node directly before the browser has a chance to paint.
  useLayoutEffect(() => {
    if (value === 0) {
      setValue(10 + Math.random() * 200);
    }
  }, [value]);

  console.log("render", value);

  return (
    <div style={{ display: "grid", placeItems: "center" }}>
      <button
        className="btn1"
        style={{ marginTop: "180px", outlineWidth: "0" }}
        onClick={() => setValue(0)}
      >
        Click
      </button>
      <br />
      <h5> Value: {value}</h5>
    </div>
  );
};

export default UseLayoutEffectPage;
