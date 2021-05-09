//custom hook

import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({ data: null, loading: true });

  //useEffect(callback, dependencies) is the hook that manages the side-effects in functional components.
  //callback argument is a function to put the side-effect logic.
  // dependencies is a list of dependencies of your side-effect: being props or state values.

  useEffect(() => {
    setState((s) => ({ data: s.data, loading: true }));
    fetch(url)
      .then((x) => x.text())
      .then((y) => {
        setState({ data: y, loading: false });
      });
  }, [url, setState]);
  return state;
};
