import { useState } from "react";
import {
  Toolbar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer,
  Divider,
  Icon,
  Box,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BackpackIcon from "@mui/icons-material/Backpack";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import InfoIcon from "@mui/icons-material/Info";
import logo from "../Assets/images/logo.svg";
import { Link } from "react-router-dom";
import { useStyles } from "../Assets/styles";

export const drawerWidth = 240;

const Sidebar = () => {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerMenu = [
    {
      label: "Overview",
      icon: <DashboardIcon />,
      color: "white",
      path: "/",
    },
    {
      label: "Tanks",
      icon: <BackpackIcon />,
      color: "primary",
      path: "/tanks",
    },
    {
      label: "Analytics",
      icon: <AnalyticsIcon />,
      color: "success",
      path: "/analytics",
    },
    { label: "About", icon: <InfoIcon />, color: "warning", path: "/about" },
  ];

  const drawer = (
    <div>
      <Toolbar>
        <img
          src={logo}
          alt="logo"
          width="100"
          height="100"
          className={classes.logo}
        />
      </Toolbar>
      <Box className={classes.divider}>
        <Divider />
      </Box>
      <List>
        {drawerMenu.map(({ label, icon, color, path }) => (
          <Link
            to={path}
            style={{
              textDecoration: "none",
            }}
          >
            <ListItem
              button
              key={label}
              sx={{ "&:hover": { background: "#f5f5f5" } }}
            >
              <ListItemIcon>
                <Icon color={color}>{icon}</Icon>
              </ListItemIcon>
              <ListItemText
                primary={label}
                sx={{ "&:hover": { color: "#616161" }, color: "#fcfcfc" }}
              />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );
  return (
    <div>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              background: "#424242",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </div>
  );
};

export default Sidebar;
