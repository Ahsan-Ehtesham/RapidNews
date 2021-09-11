import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export class App extends Component {
  pageSize = 15;
  apiKey=process.env.REACT_NEWS_API_KEY
  state = {
    progress: 0,
  };
  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            color="#0dcaf0"
            progress={this.state.progress}
            height={3}
          />
          <Switch>
            <Route exact path="/">
              <News
                setProgress={this.setProgress}
                key="general"
                country="us"
                pageSize={this.pageSize}
                category="general"
                apiKey={this.apiKey}
              />
            </Route>
            <Route exact path="/business">
              <News
                setProgress={this.setProgress}
                key="business"
                country="us"
                pageSize={this.pageSize}
                category="business"
                apiKey={this.apiKey}
              />
            </Route>
            <Route exact path="/entertainment">
              <News
                setProgress={this.setProgress}
                key="entertainment"
                country="us"
                pageSize={this.pageSize}
                category="entertainment"
                apiKey={this.apiKey}
              />
            </Route>
            <Route exact path="/health">
              <News
                setProgress={this.setProgress}
                key="health"
                country="us"
                pageSize={this.pageSize}
                category="health"
                apiKey={this.apiKey}
              />
            </Route>
            <Route exact path="/science">
              <News
                setProgress={this.setProgress}
                key="science"
                country="us"
                pageSize={this.pageSize}
                category="science"
                apiKey={this.apiKey}
              />
            </Route>
            <Route exact path="/sports">
              <News
                setProgress={this.setProgress}
                key="sports"
                country="us"
                pageSize={this.pageSize}
                category="sports"
                apiKey={this.apiKey}
              />
            </Route>
            <Route exact path="/technology">
              <News
                setProgress={this.setProgress}
                key="technology"
                country="us"
                pageSize={this.pageSize}
                category="technology"
                apiKey={this.apiKey}
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
