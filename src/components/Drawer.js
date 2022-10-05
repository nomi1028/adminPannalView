import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Home from "./Home";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";

import MainCard from "./MainCard";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  Routes,
  NavLink,
} from "react-router-dom";
import TableStickyHeader from "./Record";
import { Button } from "@mui/material";
import { Password } from "@mui/icons-material";
import SignIn from "./SignIn";
import Cookies from "js-cookie";

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isLogin, setIsLogin] = React.useState(false);

  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const Navigate = () => {
    navigate("/record");
  };
  React.useEffect(() => {
    const Value = Cookies.get("LogIN");
    if (Value == "true") {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [isLogin]);
  const Signout = () => {
    Cookies.remove("LogIN");
    setIsLogin(false);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />   
      <Link to="/" style={{ textDecoration: "none", color: "white" }}>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon style={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary={"TRADE"} />
            </ListItemButton>
          </ListItem>
        </List>
      </Link>
      <Divider /> 
      <List onClick={Navigate}>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <InboxIcon style={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary={"Record"} />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider /> 
      <List onClick={Signout}>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <InboxIcon style={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary={"Signout"} />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      {isLogin ? (
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar
            position="fixed"
            sx={{
              width: { sm: `calc(100% - ${drawerWidth}px)` },
              ml: { sm: `${drawerWidth}px` },
            }}
          >
            <Toolbar sx={{ backgroundColor: "#454545" }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" } }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap component="div">
                Trade
              </Typography>
            </Toolbar>
          </AppBar>
          <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            aria-label="mailbox folders"
          >
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Drawer
              container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                display: { xs: "block", sm: "none" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                  backgroundColor: "Black",
                  color: "white",
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
                  backgroundColor: "Black",
                  color: "white",
                },
              }}
              open
            >
              {drawer}
            </Drawer>
          </Box>
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: 3,
              width: { sm: `calc(100% - ${drawerWidth}px)` },
            }}
          >
            <Toolbar />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/record" element={<TableStickyHeader />} />
            </Routes>
          </Box>
        </Box>
      ) : (
        <>
          {/* <TextField
            id="filled-basic"
            onChange={(e) => setUserName(e.target.value)}
            label="UserName"
            variant="filled"
          />
          <TextField
            id="filled-basic"
            onChange={(e) => setUserPassword(e.target.value)}
            label="Password"
            variant="filled"
          />
          <Button onClick={handleLogin}>Login</Button> */}
          <SignIn setIsLogin={setIsLogin} />
        </>
      )}
    </>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
