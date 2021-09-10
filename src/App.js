import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export class App extends Component {
  pageSize = 15;
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <News
                key="general"
                country="us"
                pageSize={this.pageSize}
                category="general"
              />
            </Route>
            <Route exact path="/business">
              <News
                key="business"
                country="us"
                pageSize={this.pageSize}
                category="business"
              />
            </Route>
            <Route exact path="/entertainment">
              <News
                key="entertainment"
                country="us"
                pageSize={this.pageSize}
                category="entertainment"
              />
            </Route>
            <Route exact path="/health">
              <News
                key="health"
                country="us"
                pageSize={this.pageSize}
                category="health"
              />
            </Route>
            <Route exact path="/science">
              <News
                key="science"
                country="us"
                pageSize={this.pageSize}
                category="science"
              />
            </Route>
            <Route exact path="/sports">
              <News
                key="sports"
                country="us"
                pageSize={this.pageSize}
                category="sports"
              />
            </Route>
            <Route exact path="/technology">
              <News
                key="technology"
                country="us"
                pageSize={this.pageSize}
                category="technology"
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
