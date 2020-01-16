import React from "react";
import { Route, BrowserRouter,Switch } from "react-router-dom";
import "./App.css";

import Home from "./components/Home.js";
import Movies from "./components/Movies.js";
import Directors from "./components/Directors.js";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/movies" component={Movies} exact/>
          <Route path="/directors" component={Directors} exact/>
          <Route component={Error}/>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
