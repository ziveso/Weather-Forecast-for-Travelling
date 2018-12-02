import React, { Component } from "react";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";
import { Button } from "antd";

class Result extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "rgba(46,149,249,0.6)",
          minHeight: "100vh",
          textAlign: "center",
          color: "white"
        }}
      >
        <header>Weather</header>
        <div style={{ marginTop: "50px" }}>
          <h1 style={{ color: "white" }}>{this.props.mobx.status.get()}</h1>
          <h3 style={{ color: "white" }}>
            {this.props.mobx.destinationcountry.get()} ,
            {this.props.mobx.destinationregion.get()}
          </h3>
          <h3 style={{ color: "white" }}>
            {this.props.mobx.temperature.get()}
          </h3>

          <h1 style={{ color: "white" }}>Recommendation</h1>
          <div>{this.props.mobx.suggest.get()}</div>
        </div>
        <footer>
          <Link to="/">
            <Button type="primary" style={{ width: "100%" }}>
              Back to home
            </Button>
          </Link>
        </footer>
      </div>
    );
  }
}

export default observer(Result);
