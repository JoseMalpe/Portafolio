import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from 'react-router-dom';

const pages = [
  { name: 'Proyectos', link: '/proyectos' },
  { name: 'Currículum', link: '/curriculum' },
  { name: 'Contacto', link: '/contacto' },
  { name: 'Sobre mí', link: '/sobremi' },
];

function ResponsiveAppBar() {

  const [anchorElNav, setAnchorElNav] = React.useState(null);


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (

    <Box position="static" padding={2}>
      <Container maxWidth="xl" >
      <Toolbar disableGutters >
          <NavLink to="/" sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
            <img
              src={'/img/LogoJM-removebg-preview.png'}
              width={200}
              height={'auto'}
              style={{ margin: '10px' }}
              alt="Logo"
            />
          </NavLink>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >

          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Typography component={NavLink} to={page.link} textAlign="center" variant="body1" color="inherit" sx={{ textDecoration: 'none' }}>
                    {page.name}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                component={NavLink}
                to={page.link}
                onClick={handleCloseNavMenu}
                sx={{ 
                  my: 2, 
                  color: 'black', 
                  display: 'block', 
                  textDecoration: 'none',
                  marginLeft: '50px'
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </Box>
  );
}
export default ResponsiveAppBar;
