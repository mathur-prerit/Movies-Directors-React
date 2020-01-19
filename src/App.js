import React from "react";
import { Route, BrowserRouter,Switch } from "react-router-dom";
import "./App.css";

import Home from "./components/Home.js";
import Movies from "./components/Movies.js";
import Directors from "./components/Directors.js";
import Moviebyid from './components/Moviebyid.jsx';
import Addmoviesform from './components/Addmoviesform.jsx';
import Editmoviesfrom from './components/Editmoviesform.jsx';
import Errolanding from './components/error.jsx'

function App() {
  
  return (
    <div>
      <BrowserRouter>
        <div>
          <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/movies" component={Movies} exact/>
          <Route path="/directors" component={Directors} exact/>
          <Route exact path="/movies/add" component={Addmoviesform}/>
          <Route exact path="/movies/:id" component={Moviebyid} />
          <Route exact path="/movies/:id/edit" component={Editmoviesfrom} />
          <Route component={Errolanding}/>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
