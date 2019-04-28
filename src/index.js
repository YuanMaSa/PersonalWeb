import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import { Router, Route, Switch } from "react-router";
import indexRoutes from "./routes/routes.js";
import { createBrowserHistory } from "history";
// import "./assets/css/material-kit-react.css";

var hist = createBrowserHistory();
ReactDOM.render(<Router history={hist}>
  <Switch>
    {indexRoutes.map((prop, key) => {
      return <Route path={prop.path} key={key} component={prop.component} />;
    })}
  </Switch>
</Router>, document.getElementById('root'));
export default hist;
