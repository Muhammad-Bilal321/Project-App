import { Button } from "@mui/material";
import React from "react";

const ButtonBP = ({ onClick, label, color, variant }) => {
  return (
    <div>
      <Button onClick={onClick} color={color} variant={variant}>
        {label}
      </Button>
    </div>
  );
};

export default ButtonBP;
