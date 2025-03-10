import React from "react";
import VegaLiteHorizontalBar from "./VegaLiteHorizontalBar";

function App() {
  return (
    <div style={{ width: "500px", margin: "50px auto", textAlign: "center" }}>
      <h2>Interactive Vega-Lite Bar Graph</h2>
      <VegaLiteHorizontalBar />
    </div>
  );
}

export default App;
