import React, { Component } from "react";
import { Button, Col, Row, DatePicker } from "antd";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import { Link } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      origincountry: "",
      originregion: "",
      destinationcountry: "",
      destinationregion: "",
      departing: "",
      returning: ""
    };
    this.select = this.select.bind(this);
  }

  select(val) {
    return name => {
      this.setState({ [name]: val });
      this.props.mobx[name].set(val);
    };
  }

  render() {
    return (
      <div>
        <header>Weather</header>
        <Row style={{ padding: "0px 10px" }}>
          <Col span={8}>
            <b>Origin</b>
          </Col>
          <Col span={16}>
            <div>
              <CountryDropdown
                value={this.state.origincountry}
                onChange={val => this.select(val)("origincountry")}
                style={{ width: "100%" }}
              />
              <RegionDropdown
                country={this.state.origincountry}
                value={this.state.originregion}
                onChange={val => this.select(val)("originregion")}
                style={{ width: "100%" }}
              />
            </div>
          </Col>
        </Row>
        <hr />
        <Row style={{ padding: "0px 10px" }}>
          <Col span={8}>
            <b>Destination</b>
          </Col>
          <Col span={16}>
            <div>
              <CountryDropdown
                value={this.state.destinationcountry}
                onChange={val => this.select(val)("destinationcountry")}
                style={{ width: "100%" }}
              />
              <RegionDropdown
                country={this.state.destinationcountry}
                value={this.state.destinationregion}
                onChange={val => this.select(val)("destinationregion")}
                style={{ width: "100%" }}
              />
            </div>
          </Col>
        </Row>
        <hr />
        <Row style={{ padding: "0px 10px" }}>
          <Col span={8}>
            <b>Departing</b>
          </Col>
          <Col span={16}>
            <DatePicker onChange={val => this.select(val)("departing")} />
          </Col>
        </Row>
        <hr />
        <Row style={{ padding: "0px 10px" }}>
          <Col span={8}>
            <b>Returning</b>
          </Col>
          <Col span={16}>
            <DatePicker onChange={val => this.select(val)("returning")} />
          </Col>
        </Row>
        <hr />
        <footer>
          <Link to="/result">
            <Button type="primary" style={{ width: "100%" }}>
              Check weather
            </Button>
          </Link>
        </footer>
      </div>
    );
  }
}

export default Home;
