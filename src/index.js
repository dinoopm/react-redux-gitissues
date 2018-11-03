import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./styles/normalize.css";
import "./styles/style.css";

import IssuesPage from "./components/issues";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Provider>
    <Router>
      <Switch>
        <Route path="/issues" component={IssuesPage} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

serviceWorker.unregister();
