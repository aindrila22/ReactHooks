import React, { useState } from "react";
import { useFetch } from "./UseFetch";

function UseEffect(query) {
  const [count, setCount] = useState(0);
  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);
  // const [employees, setEmployees] = useState([]);

  // useEffect(() => {
  //   async function fetchEmployees() {
  //     const response = await fetch(`/employees?q=${encodeURIComponent(query)}`);
  //     const fetchedEmployees = await response.json(response);
  //     setEmployees(fetchedEmployees);
  //   }
  //   fetchEmployees();
  // }, [query]);
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
      {/*  <br />
      {employees.map((name) => (
        <div>{name}</div>
      ))}*/}
    </div>
  );
}

export default UseEffect;
