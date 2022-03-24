import React from "react";

import "../scss/styled_components/LateralFilter.scss";

const LateralFilter = () => {
  return (
    <div className="LateralFilter">
      <ul className="Filters">
        <li id="Prices">
          <ul id="Price_filters">
            <li>
              <div id="title_box">
                <h3>Precios</h3>
              </div>
            </li>
            <li>
              <div id="list_filter_prices_box">
                <ul>
                  <li>
                    <label><input type="checkbox" name="" id="" /></label>
                  </li>
                  <li>
                    <label><input type="checkbox" name="" id="" /></label>
                  </li>
                  <li>
                    <label><input type="checkbox" name="" id="" /></label>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </li>
        <li id="Region">a</li>
      </ul>
    </div>
  );
};

export default LateralFilter;
