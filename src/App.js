import React from "react";
import "./App.css";

import NavR from "./Components/NavR/NavR";
import LoadingP from "./Components/loadingP/LoadingP";

function App() {
  return (
    <div className="App">
      <LoadingP />
      <NavR />
    </div>
  );
}

export default App;
