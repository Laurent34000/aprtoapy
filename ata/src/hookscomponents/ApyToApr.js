import React, { useState } from "react";

const ApyToApr = () => {
  const [yourApy, setYourApy] = useState("");
  const [period, setPeriod] = useState("");
  const [total, setTotal] = useState("");

  const handleTotal = (e) => {
    e.preventDefault();
    setTotal(
      (Math.pow(1 + Number(yourApy / 100), 1 / period) - 1) * period * 100
    );
  };

  return (
    <div className="container mt-5 col-sm-7">
      <div className="card">
      <h1 className="card-header">APY to APR</h1>
   

      <div className="card-body mt-4">
        <form  onSubmit={handleTotal}>
      <div className="row form-group justify-content-center" >
      <div className="col-sm-2">
          <input
            className="form-control"
            type="number"
            value={yourApy}
            onChange={(e) => setYourApy(e.target.value)}
          ></input>
          </div>    
          <span className="w-auto">% APY compounding</span>
          
          <div className="col-sm-2">
          <select
            className="form-select"
            value={period}
            onChange={(e) => setPeriod(Number(e.target.value))}
          >
            <option value=""></option>
            <option value="1">annualy</option>
            <option value="2">semester</option>
            <option value="12">monthly</option>
            <option value="52">weekly</option>
            <option value="365">daily</option>
          </select>
          </div>
          <span className="col-sm-1">is</span>
          <div className="col-sm-1"> 
          <button className="btn btn-secondary w-auto p-2" type="submit">
            Calculate
          </button>
          </div>
          <p className="m-4">
            {isNaN(Number(total).toFixed(2))
              ? "0.00"
              : Number(total).toFixed(2)}{" "}
            % APR
          </p>
          </div>
        </form>
        </div>
      </div>
    </div>
  );
};

export default ApyToApr;
