import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Meta from "./components/Meta";
import Reset from "./components/Reset";
import TypographicGrid from "./components/TypographicGrid";

import Home from "./components/Home";
import WhatIsReact from "./components/WhatIsReact";
import RulesOfReact from "./components/RulesOfReact";
import LoadingData from "./components/LoadingData";
import LoadingImages from "./components/LoadingImages";
import Memoization from "./components/Memoization";

const App = () => {
  return (
    <>
      <Meta />
      <Reset />
      <TypographicGrid
        displayVerticalRhytm={false}
        displayHorizontalRhytm={false}
      />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/what-is-react" component={WhatIsReact} />
          <Route path="/rules-of-react" component={RulesOfReact} />
          <Route path="/loading-data" component={LoadingData} />
          <Route path="/loading-images" component={LoadingImages} />
          <Route path="/memoization" component={Memoization} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
