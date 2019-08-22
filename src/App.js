import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Meta from "./components/Meta";
import Reset from "./components/Reset";
import TypographicGrid from "./components/TypographicGrid";

import Home from "./components/Home";
import LoadingData from "./components/LoadingData";
import LoadingDataApiAxios from "./components/LoadingDataApiAxios";

const App = () => {
  return (
    <>
      <Meta />
      <Reset />
      <TypographicGrid />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/loading-data" component={LoadingData} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
