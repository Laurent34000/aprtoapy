import React, { useState } from "react";

const ApyToApr = () => {
  const [yourApy, setYourApy] = useState(5);
  const [period, setPeriod] = useState(1);

  const result = (
    (Math.pow(1 + Number(yourApy / 100), 1 / period) - 1) *
    period *
    100
  ).toFixed(2);

     
  return (
    <div className="container mt-5 col-sm-7">
      <div className="card">
        <h1 className="card-header">APY to APR</h1>

        <div className="card-body mt-4">
          <form>
            <div className="row form-group justify-content-center">
              <div className="col-sm-2">
                <input
                  type="number"
                  className="form-control"
                  value={yourApy}
                  onChange={(e) => setYourApy(e.target.value)}
                ></input>
              </div>
              <span className="w-auto">% APY</span>
              <span className="w-auto ">compounding</span>
              <div className="col-sm-2">
                <select
                  className="form-select"
                  value={period}
                  onChange={(e) => setPeriod(e.target.value)}
                >
                  <option value="1">annualy</option>
                  <option value="2">semester</option>
                  <option value="12">monthly</option>
                  <option value="52">weekly</option>
                  <option value="365">daily</option>
                </select>
              </div>
              <span className="col-sm-1">is</span>
              <div className="col-sm-2">{isNaN(result) ? "0.00" : result}</div>%
              APR
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApyToApr;
