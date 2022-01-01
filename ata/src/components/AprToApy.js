import React, { Component } from "react";

class AprToApy extends Component {
  state = {
    yourapr: "",
    period: "",
    total: "",
  };

  handleApr = (e) => {
    this.setState({
      yourapr: e.target.value,
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
            1 + this.state.yourapr / 100 / this.state.period,
            this.state.period
          ) - 1,
        ] * 100,
    });
  };

  render() {
    return (
      <div>
        <h1>APR to APY</h1>

        <form
          class="row align-items-center"
          style={{ width: "100%", justifyContent: "center" }}
          onSubmit={this.exe}
        >
          <div style={{ display: "contents" }}>
            <input
              class="form-control"
              type="text"
              value={this.state.yourapr}
              onChange={this.handleApr}
              style={{ width: "200px" }}
            />
            <span style={{ margin: "25px" }}>% APR compounding</span>
          </div>
          <div style={{ display: "contents" }}>
            <select
              class="form-select"
              value={this.state.value}
              onChange={this.handlePeriod}
              style={{ width: "200px" }}
            >
              <option value=""></option>
              <option value="1">annualy</option>
              <option value="2">semester</option>
              <option value="12">monthly</option>
              <option value="52">weekly</option>
              <option value="365">daily</option>
            </select>{" "}
            <span style={{ margin: "25px" }}>is</span>
          </div>
          <div style={{ display: "contents" }}>
            <button
              class="btn btn-secondary"
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
            % APY
          </p>
        </form>
      </div>
    );
  }
}

export default AprToApy;
