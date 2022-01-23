import React, { Component } from "react";

class ApyToApr extends Component {
  state = {
    yourapy: "",
    period: "",
    total: "",
  };

  handleApy = (e) => {
    this.setState({
      yourapy: e.target.value,
    });
  };
  handlePeriod = (e) => {
    this.setState({
      period: e.target.value,
    });
  };

  exe = (e) => {
    e.preventDefault();
    this.setState({
      total:
        [
          Math.pow(
            1 + parseInt(this.state.yourapy) / 100,
            1 / parseInt(this.state.period)
          ) - 1,
        ] * [parseInt(this.state.period) * 100],
    });
  };

  render() {
    return (
      <div>
        <h1 style={{ paddingTop: "60px" }}> APY to APR</h1>
        <form
          className="row align-items-center"
          onSubmit={this.exe}
          style={{ width: "100%", justifyContent: "center" }}
        >
          <div style={{ display: "contents" }}>
            <input
              className="form-control"
              type="text"
              value={this.state.yourapy}
              onChange={this.handleApy}
              style={{ width: "200px" }}
            />
            <span style={{ margin: "25px" }}>% APY compounding</span>
          </div>

          <div style={{ display: "contents" }}>
            <select
              className="form-select"
              value={this.state.period}
              onChange={this.handlePeriod}
              style={{ width: "200px" }}
            >
              <option value=""></option>
              <option value="1">annual</option>
              <option value="2">semestre</option>
              <option value="12">monthly</option>
              <option value="52">weekly</option>
              <option value="365">daily</option>
            </select>
            <span style={{ margin: "25px" }}>is</span>
          </div>

          <div style={{ display: "contents" }}>
            <button
              className="btn btn-secondary"
              style={{ padding: "10px" }}
              type="submit"
            >
              Calculate
            </button>
          </div>
          <p>
            {isNaN(Number(this.state.total).toFixed(2))
              ? "0.00"
              : Number(this.state.total).toFixed(2)}{" "}
            % APR
          </p>
        </form>
      </div>
    );
  }
}

export default ApyToApr;
