// Submenu.js

import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";

function Submenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleOpenSubMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseSubMenu = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="submenu"
        aria-haspopup="true"
        onClick={handleOpenSubMenu}
        variant="contained"
      >
        Open Submenu
      </Button>
      <Menu
        id="submenu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseSubMenu}
      >
        <MenuItem onClick={handleCloseSubMenu}>
          <Link to="/testscreen">Submenu Item 1</Link>
        </MenuItem>
        <MenuItem onClick={handleCloseSubMenu}>
          <Link to="/submenu/item2">Submenu Item 2</Link>
        </MenuItem>
        <MenuItem onClick={handleCloseSubMenu}>
          <Link to="/submenu/item3">Submenu Item 3</Link>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default Submenu;
