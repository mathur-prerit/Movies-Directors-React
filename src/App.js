import React from "react";
import { Route, BrowserRouter,Switch } from "react-router-dom";
import "./App.css";

import Header from "./components/Header.jsx";

import Home from "./components/Home.js";
import Movies from "./components/Movies.js";
import Directors from "./components/Directors.js";

function App() {
  return (
    <div>
      <div className="App">
        <Header />
      </div>
      <BrowserRouter>
        <div>
          <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/movies" component={Movies} />
          <Route path="/directors" component={Directors} />
          <Route component={Error}/>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
