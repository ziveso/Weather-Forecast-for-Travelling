import React, { Component } from "react";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";
import { Button } from "antd";

class Result extends Component {
  getStatus(statuses) {
    return (
      <div style={{ color: "white", fontSize: "2em" }}>
        {statuses.map(
          (status, index) =>
            `${status}${index !== statuses.length - 1 ? " and " : ""}`
        )}
      </div>
    );
  }

  getSuggest(suggests) {
    return (
      <div>
        {suggests.length > 0 ? (
          <h1 style={{ color: "white" }}>Recommendations</h1>
        ) : null}
        <ul>
          {suggests.map(suggest => (
            <li>{suggest}</li>
          ))}
        </ul>
      </div>
    );
  }

  getImage(status) {
    if (status.includes("Rainy")) {
      return (
        <iframe
          src="https://giphy.com/embed/3og0IOUWB5AZoP6la0"
          style={{ width: "200px", height: "200px" }}
          title="rainy"
        />
      );
    } else if (status.includes("Cold Weather")) {
      return (
        <iframe
          src="https://giphy.com/embed/3o7Zew0uwZvgtb5EVG"
          style={{ width: "200px", height: "200px" }}
          title="cold"
        />
      );
    } else if (status.includes("Windy")) {
      return (
        <iframe
          src="https://giphy.com/embed/l2JJtwLTg3AppUgmY"
          style={{ width: "200px", height: "200px" }}
          title="windy"
        />
      );
    } else if (status.includes("Hot Weather")) {
      return (
        <iframe
          src="https://giphy.com/embed/kNUDroLCe1KCY"
          style={{ width: "200px", height: "200px" }}
          title="hot"
        />
      );
    }
    return (
      <iframe
        src="https://giphy.com/embed/129P2fIHBVzby0"
        style={{ width: "200px", height: "200px" }}
        title="perfect"
      />
    );
  }

  getBackgroundColor(status) {
    if (status.includes("Rainy")) {
      return "#006666";
    } else if (status.includes("Cold Weather")) {
      return "#4d88ff";
    } else if (status.includes("Windy")) {
      return "#00b300";
    } else if (status.includes("Hot Weather")) {
      return "#ff5c33";
    }
    return "#ff80ff";
  }

  render() {
    return (
      <div
        style={{
          backgroundColor: this.getBackgroundColor(
            this.props.mobx.status.get()
          ),
          minHeight: "100vh",
          textAlign: "center",
          color: "white"
        }}
      >
        <header>Weather</header>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "100%",
            maxWidth: "500px",
            transform: "translate(-50%,-50%)"
          }}
        >
          <h1 style={{ color: "white" }}>
            {this.getStatus(this.props.mobx.status.get())}
          </h1>
          <h3 style={{ color: "white" }}>
            {this.props.mobx.destinationcountry.get()} ,
            {this.props.mobx.destinationregion.get()}
          </h3>
          <h3 style={{ color: "white" }}>
            {this.props.mobx.temperature.get()}
          </h3>
          <div className="image">
            {this.getImage(this.props.mobx.status.get())}
          </div>
          {this.getSuggest(this.props.mobx.suggest.get())}
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
