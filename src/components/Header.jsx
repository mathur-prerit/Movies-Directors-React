import React from "react";
import { Link, withRouter } from "react-router-dom";

const Header = withRouter(({ history}) => {
  return (
    <div className="App">
      <h1 onClick={() => {history.push('/')}}>
        Movies-Directors
      </h1>
      <div class="header-clicks">
        {/* <Link to="/movies/">Movies</Link> */}
        <h3 onClick={() => {history.push('/movies/')}}>
        Movies
      </h3>
      <h3 onClick={() => {history.push('/directors/')}}>
        Directors
      </h3>
        {/* <Link to="/directors/">Directors</Link> */}
      </div>
    </div>
  );
  });

export default Header;
