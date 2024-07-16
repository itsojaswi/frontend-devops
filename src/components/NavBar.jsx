import React, { useState } from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawerContent = (
    <List onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
      <ListItem button>
        <ListItemText primary={<Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Home</Link>} />
      </ListItem>
      <ListItem button>
        <ListItemText primary={<Link to="/workouts" style={{ textDecoration: 'none', color: 'inherit' }}>Workouts</Link>} />
      </ListItem>
    </List>
  );

  return (
    <div>
      <AppBar
        position="static"
        sx={{ backgroundColor: "#696969", padding: "10px", height: "90px" }}
      >
        <Toolbar >
          {isMobile && (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, fontWeight: "bold", color: "#DCDCDC", fontSize: "30px", cursor: "pointer",}}
          >
            FitnessApppppp
          </Typography>
          {!isMobile && (
            <Box sx={{ display: "flex" }}>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  color: '#DCDCDC',
                  mx: 2,
                  fontSize: "20px",
                  cursor: "pointer",
                }}
              >
                <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Home</Link>
              </Typography>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  color: '#DCDCDC',
                  mx: 2,
                  fontSize: "20px",
                  cursor: "pointer",
                }}
              >
                <Link to="/workouts" style={{ textDecoration: 'none', color: 'inherit' }}>Workouts</Link>
              </Typography>
            </Box>
          )}
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawerContent}
      </Drawer>
    </div>
  );
};

export default NavBar;
