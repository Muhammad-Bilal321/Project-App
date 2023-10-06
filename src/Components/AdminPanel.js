import React, { useState, useEffect } from "react";
import MuiDrawer from "@mui/material/Drawer";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import DashboardIcon from "@mui/icons-material/Dashboard";
import StoreIcon from "@mui/icons-material/Store";
import DiscountIcon from "@mui/icons-material/Discount";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

function AdminPanel() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const navigate = useNavigate();
  const handleRouter = (route) => {
    navigate(route);
  };
  const btnLogout = () => {
    navigate("/login");
  };

  const listItem = [
    {
      text: "Dashboard",
      icon: <DashboardIcon />,
      route: "/",
    },
    {
      text: "Store",
      icon: <StoreIcon />,
      submenu: [
        {
          text: "Store Add",
          route: "/add-store",
        },
        {
          text: "Edit Store",
          route: "/edit-store",
        },
      ],
      route:"store-add"
    },
    {
      text: "Coupons",
      icon: <DiscountIcon />,
      route: "/coupons",
    },
  ];

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <>
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <MuiDrawer anchor="left" open={openDrawer} onClose={toggleDrawer}>
          <List>
            {listItem.map((item, index) => {
              const { text, icon, route, menu } = item;
              return (
                <ListItem key={text} onClick={() => handleRouter(route)}>
                  <ListItemButton>
                    <div key={index}>
                      <ListItemIcon>{icon}</ListItemIcon>
                    </div>
                    <ListItemText primary={text} />
                    <ListItemText primary={menu} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
          <Button
            className="mt-auto mb-4 mx-auto"
            variant="contained"
            color="error"
            onClick={btnLogout}
          >
            Logout
          </Button>
        </MuiDrawer>
      </div>
      {/* Content */}
    </>
  );
}

export default AdminPanel;
