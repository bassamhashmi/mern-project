import React from "react";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Select from "@mui/material/Select";
import AddIcon from "@mui/icons-material/Add";

export default function SelectSmall({
  valueState,
  handleChange,
  inputLabel,
  items,
  minWidth,
  required,
  addNewWhat,
  addNewFunc,
}) {
  if (!required) {
    required = "";
  } else {
    required = "required";
  }

  return (
    <FormControl
      sx={{ m: 1, minWidth: { minWidth }, width: 120 }}
      size="medium"
    >
      <InputLabel id="select-small">{inputLabel}</InputLabel>
      <Select
        id="select-small"
        value={valueState}
        label={inputLabel}
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>

        {items.map((item) => {
          return <MenuItem value={item}>{item}</MenuItem>;
        })}

        <MenuItem onClick={addNewFunc} value="">
          <AddIcon /> Add new {addNewWhat}
        </MenuItem>
      </Select>
      <FormHelperText>{required}</FormHelperText>
    </FormControl>
  );
}
