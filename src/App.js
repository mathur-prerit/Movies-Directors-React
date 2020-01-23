import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import "./App.css";

import Home from "./components/Home.js";
import Movies from "./components/Movies.js";
import Moviebyid from "./components/Moviebyid.jsx";
import Addmoviesform from "./components/Addmoviesform.jsx";
import Editmoviesform from "./components/Editmoviesform.jsx";

import Directors from "./components/Directors.js";
import Directorbyid from "./components/Directorbyid.jsx";
import Adddirectorsform from "./components/Adddirectorsform.jsx";
import Editdirectorsform from "./components/Editdirectorsfrom.jsx";

import Errorlanding from "./components/error.jsx";

function App() {
  return (
    <div>
        <BrowserRouter>
          <div>
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/movies" component={Movies} exact />
              <Route exact path="/movies/add" component={Addmoviesform} />
              <Route exact path="/movies/:id" component={Moviebyid} />
              <Route exact path="/movies/:id/edit" component={Editmoviesform} />

              <Route path="/directors" component={Directors} exact />
              <Route exact path="/directors/add" component={Adddirectorsform}/>
          <Route exact path="/directors/:id" component={Directorbyid} />
          <Route exact path="/directors/:id/edit" component={Editdirectorsform} />

              <Route component={Errorlanding} />
            </Switch>
          </div>
        </BrowserRouter>
    </div>

  );
}



export default App;
