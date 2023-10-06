import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import React from "react";

export default function StoreAdd() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className="text-start container">
      <h1 className="text-center">Store Add</h1>

      <TextField
        id="outlined-basic"
        label="Store Add"
        variant="outlined"
        className="w-100"
      />
      <br />
      <br />
      <Box sx={{ minWidth: 120 }}>
        <FormControl className="w-25">
          <InputLabel id="demo-simple-select-label">Heading</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Heading"
            onChange={handleChange}
          >
            <MenuItem value={10}>Promo Codes</MenuItem>
            <MenuItem value={20}>Coupon Codes</MenuItem>
            <MenuItem value={30}>Voucher Codes</MenuItem>
          </Select>
        </FormControl>
      </Box>
      {/* Continue  */}
    </div>
  );
}
