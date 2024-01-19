import { NavLink } from "react-router-dom";
import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import { Divider, Typography } from "@mui/material";
import Logo from "./Logo.js";
import ColorModeSwitcher from "./ColorModeSwitcher.js";
import { useColorScheme } from '@mui/material/styles';

import LanguageSelector from "./LanguageSelector.js";

export default function NavigationBarEva(props) {
  const drawerWidth = 300;
  const navItems = [
      { key: "home", to: "/", label: "Inicio" },
      { key: "history", to: "/history", label: "Historia" },
      { key: "logo", to: "/", label: <Logo variant="light" height="40px" /> },
      { key: "prices", to: "/pricing", label: "Precios" },
      { key: "contact", to: "/contact", label: "Contacto" }
  ];
 
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const colorMode = useColorScheme();
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const drawer = (
      <Box sx={{ paddingTop: "20px" }}> { /* onClick={handleDrawerToggle} */}
        <List>
          <ListItem key="logo" sx={{ justifyContent: "center" }}>
              <NavLink to="/">
                  <Logo variant={colorMode.mode === "light" ? "dark" : "light"} height="40px" />
              </NavLink>
          </ListItem>
          {navItems.filter((item) => item.key !== "logo").map((item) => (
            <ListItem key={item.key} sx={{ justifyContent: "center" }}>
                <NavLink to={item.to}>
                  <Typography sx={{color: colorMode.mode === "light" ? "#000" : "#fff"}}>{(item.key)}</Typography>
                </NavLink>
            </ListItem>
          ))}
        </List>
        <Divider />
        <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", gap: "20px", py: "20px"}}>
          <LanguageSelector />
          <ColorModeSwitcher />
        </Box>
      </Box>
  );
  const container = window !== undefined ? () => window().document.body : undefined;
  return (
    <Box className="menu" sx={{ display: 'flex', mx: {xs: '30px'}, my: {xs: '50px', sm: '20px'} }}>
      <CssBaseline />
      <AppBar sx={{background: "transparent", boxShadow: "none", position: "initial"}}>
        <Toolbar sx={{display: "flex"}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{display: { sm: 'none' }, flexGrow: "1", textAlign: "center"}}>
            <Logo variant="light" height="40px" />
          </Box>
          <Box sx={{display: { xs: 'none', sm: 'flex' }, alignItems: "center", justifyContent: "center", marginLeft: "auto", marginRight: "auto", gap: "30px"}}>
            {navItems.map((item) => (
                <NavLink key={item.key} to={item.to}>
                  {item.key !== "logo" ? (<Typography variant="h6" sx={{color: "#fff"}}>{(item.key)}</Typography>) : (item.label)}
                </NavLink>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundImage: "none" },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
NavigationBarEva.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};