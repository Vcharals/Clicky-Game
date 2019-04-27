import React from "react";
import "./Nav.css";

const Nav = props => (
  <nav>
    <div className="header-row">
      <h2>
        <a href="/clicky-game/">{props.title}</a>
      </h2>
      <h4 id="top-sco">Top Score: {props.topScore}</h4>
    </div>
    <div className="header-row">
      <h2>{props.rightWrong}</h2>
      <h4>Current Score: {props.score}</h4>
    </div>
  </nav>
);

export default Nav;