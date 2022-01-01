import React, { useState } from "react";

const AprToApy = () => {
  const [yourApr, setYourApr] = useState("");
  const [period, setPeriod] = useState("");
  const [total, setTotal] = useState();

  const handleTotal = (e) => {
    e.preventDefault();
    setTotal((Math.pow(1 + Number(yourApr) / 100 / period, period) - 1) * 100);
  };

  return (
    <div className="mt-3">
      <h1>APR to APY</h1>
      <div className="d-inline-flex">
        <form className="row align-items-center w-100" onSubmit={handleTotal}>
          <input
            type="text"
            class="form-control w-auto"
            value={yourApr}
            onChange={(e) => setYourApr(e.target.value)}
          ></input>
          <span className="w-auto m-5">% APR compounding</span>
          <select
            className="form-select w-auto"
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
          <span className="w-auto m-5">is</span>
          <button class="btn btn-secondary w-auto p-2" type="submit">
            Calculate
          </button>
          <p className="pt-2">
            {isNaN(Number(total).toFixed(2))
              ? "0.00"
              : Number(total).toFixed(2)}{" "}
            % APY
          </p>
        </form>
      </div>
    </div>
  );
};

export default AprToApy;
