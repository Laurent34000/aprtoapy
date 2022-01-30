import React, { useState } from "react";

const AprToApy = () => {
  const [yourApr, setYourApr] = useState(5);
  const [period, setPeriod] = useState(1);

  const result = (
    (Math.pow(1 + Number(yourApr) / 100 / period, period) - 1) *
    100
  ).toFixed(2);

  //((Math.pow(1 + Number(yourApr) / 100 / period, period) - 1) * 100).toFixed(2)

  return (
    <div className="container mt-5 col-sm-7">
      <div className="card">
        <h1 className="card-header">APR to APY</h1>
        <div className="card-body m-4">
          <form>
            <div className="row form-group justify-content-center">
              <div className="col-lg-3">
              <div className="input-group col-lg-12 mb-3 mb-lg-0">
                <input
                  type="number"
                  className="form-control"
                  value={yourApr}
                  onChange={(e) => setYourApr(e.target.value)}
                ></input>
              <span className="input-group-text">% APR </span>
              </div>
              </div>
              <span className="w-auto d-none d-lg-block ">compounding</span>
              <div className="col-lg-2 m-3 m-lg-0">
                <select
                  className="form-select"
                  value={period}
                  onChange={(e) => setPeriod(Number(e.target.value))}
                >
                  <option value="1">annually</option>
                  <option value="2">semester</option>
                  <option value="12">monthly</option>
                  <option value="52">weekly</option>
                  <option value="365">daily</option>
                </select>
              </div>
              <span className="w-auto">is</span>
              <div className="w-auto">{result}</div>% APY
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AprToApy;
