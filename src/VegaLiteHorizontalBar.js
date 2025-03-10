import React, { useState } from "react";
import { VegaLite } from "react-vega";
import { Slider } from "@mui/material";

const VegaLiteHorizontalBar = () => {
  const [range, setRange] = useState([0, 100]);

  const data = [
    { category: "Bar", value: 100, color: "linear-gradient(to right, #ff5733, #33ff57, #3357ff, #ff33a1, #f3ff33)" },
  ];

  const spec = {
    width: 500,
    height: 60,
    layer: [
      {
        mark: "bar",
        encoding: {
          x: { field: "value", type: "quantitative", scale: { domain: [0, 100] } },
          color: { value: "#ff5733" },
        },
        data: { values: [{ value: 100 }] },
      },
      {
        mark: "bar",
        encoding: {
          x: { field: "value", type: "quantitative", scale: { domain: [range[0], range[1]] } },
          color: { field: "color", type: "nominal", scale: null },
        },
        data: { values: data },
      },
    ],
  };

  return (
    <div style={{ width: "550px", margin: "auto" }}>
      <Slider
        value={range}
        onChange={(e, newValue) => setRange(newValue)}
        valueLabelDisplay="auto"
        min={0}
        max={100}
      />
      <VegaLite spec={spec} />
    </div>
  );
};

export default VegaLiteHorizontalBar;