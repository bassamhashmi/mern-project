import React from "react";

import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value) {
  return `$ ${value}`;
}

export default function PriceRange() {
  const [value, setValue] = React.useState([5, 1000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);

    console.log(newValue);
  };

  return (
    <div>
      <h3>Price</h3>

      <Box sx={{ width: 200 }}>
        <Slider
          min={5}
          max={1000}
          getAriaLabel={() => "Price range"}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
        />
      </Box>
    </div>
  );
}
