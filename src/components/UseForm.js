//custom hook

import { useState } from "react";

export const useForm = (initialvalues) => {
  const [values, setValues] = useState(initialvalues);

  return [
    values,
    (e) => {
      setValues({
        ...values,
        [e.target.name]: e.target.value,
      });
    },
  ];
};
