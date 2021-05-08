import React, { useState } from "react";
import { useFetch } from "./UseFetch";

function UseEffect() {
  const [count, setCount] = useState(0);
  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);
  /*() =>
  JSON.parse(localStorage.getItem("count"))

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);*/

  return (
    <div className="form">
      <div
        style={{
          display: "grid",
          flex: "wrap",
          placeItems: "center",
          marginLeft: "20px",
          color: "rgb(235, 128, 128)",
        }}
      >
        <h4>{/*!data*/ loading ? "loading..." : data}</h4>
      </div>
      <br />
      <div>
        <h6>Count : {count}</h6>
      </div>
      <br />
      <button
        className="btn1"
        style={{ outlineWidth: "0" }}
        onClick={() => setCount((c) => c + 1)}
      >
        Increment
      </button>
    </div>
  );
}

export default UseEffect;
