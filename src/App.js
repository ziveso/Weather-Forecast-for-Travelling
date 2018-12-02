import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Result from "./components/Result";
import Store from "./compute/store";
import "./App.css";

const store = new Store();

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={() => <Home mobx={store} />} />
            <Route
              exact
              path="/result"
              component={() => <Result mobx={store} />}
            />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
