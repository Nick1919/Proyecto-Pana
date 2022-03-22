import React from "react";
import LateralFilter from "./components/LateralFilter.jsx";
import ProductBox from "./components/ProductBox.jsx";

import './scss/App.scss';

const App = () => {
  return (
    <div className="App">
      <LateralFilter />
      <ProductBox />
    </div>
  );
};

export default App;
