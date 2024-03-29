import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { drawerWidth } from "./Sidebar";
import { navContext } from "./NavContext";

const Navbar = () => {
  const { handleDrawerToggle } = useContext(navContext);
  return (
    <nav>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          background: "#f5f5f5",
          color: "#616161",
        }}
        elevation={1}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon sx={{ flexGrow: 1 }} />
          </IconButton>
          <Typography
            variant="h6"
            sx={{ flexGrow: 1, textTransform: "capitalize", fontSize: "14px" }}
          >
            IOT Water Monitoring System
          </Typography>
          <HelpOutlineIcon />

          <Link
            to="/about"
            style={{
              textDecoration: "none",
              color: "black",
            }}
          >
            <Button
              color="inherit"
              variant="text"
              sx={{ textTransform: "capitalize" }}
            >
              Help
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </nav>
  );
};

export default Navbar;
