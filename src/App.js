import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import UseState from "./components/UseState";
import Navbar from "./Navbar";
import UseEffect from "./components/UseEffect";
import UseLayoutEffectPage from "./components/UseLayoutEffect";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={UseState} />
          <Route exact path="/form" component={UseEffect} />
          <Route exact path="/value" component={UseLayoutEffectPage} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
