import React from "react";

import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";

import "./index.css";

const VariantsInput = ({ variant, handleVariantInputChange }) => {
  return (
    <div className="variants-input">
      <TextField
        sx={{ m: 1, width: 120 }}
        size="small"
        label="Size *"
        name="size"
        type="text"
        value={variant.size}
        onChange={(event) => handleVariantInputChange(event, variant.id)}
      />

      <TextField
        sx={{ m: 1, width: 120 }}
        size="small"
        label="Color *"
        name="color"
        type="text"
        value={variant.color}
        onChange={(event) => handleVariantInputChange(event, variant.id)}
      />

      <FormControl sx={{ m: 1, width: 100 }} size="small">
        <InputLabel>Price *</InputLabel>
        <OutlinedInput
          name="price"
          type="number"
          value={variant.price}
          onChange={(event) => handleVariantInputChange(event, variant.id)}
          endAdornment={<InputAdornment position="start">$</InputAdornment>}
          label="Price"
        />
      </FormControl>

      <FormControl sx={{ m: 1, width: 100 }} size="small">
        <InputLabel>Inventory *</InputLabel>
        <OutlinedInput
          name="inventory"
          type="number"
          value={variant.inventory}
          onChange={(event) => {
            handleVariantInputChange(event, variant.id);
          }}
          endAdornment={<InputAdornment position="end">pcs</InputAdornment>}
          label="Inventory"
        />
      </FormControl>
    </div>
  );
};

export default VariantsInput;
