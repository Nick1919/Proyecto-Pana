import React from "react";

import "../scss/components/LateralFilter.scss";

const LateralFilter = () => {
  return (
    <div className="LateralFilter">
      <div id="#Checkbox">
        <label>
          <input type="button" id="cbox1" value="first_checkbox" /> 1$ - 10$
        </label>
        <label>
          <input type="button" id="cbox1" value="first_checkbox" /> 1$ - 10$
        </label>
        <label>
          <input type="checkbox" id="cbox1" value="first_checkbox" /> 1$ - 10$
        </label>
        <label>
          <input type="checkbox" id="cbox1" value="first_checkbox" /> 1$ - 10$
        </label>
      </div>
    </div>
  );
};

export default LateralFilter;
