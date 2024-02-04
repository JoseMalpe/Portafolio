import * as React from 'react';
import { styled } from '@mui/system';
import { Box, Container, Typography, useTheme } from '@mui/material';

const Footer = styled('footer')({
  position: 'fixed',
  bottom: 0,
  left: 0,
  width: '50px', /* Ajusta el ancho según tus necesidades */
  height: '100vh', /* Ajusta la altura según tus necesidades */
  backgroundColor: '#8a2be2', /* Color de fondo del pie de página */
  color: '#fff', /* Color del texto en el pie de página */
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '10px', /* Ajusta el espaciado interno según tus necesidades */
  writingMode: 'vertical-rl',
  transform: 'rotate(180deg)'
});

const MyFooter = () => {
  const theme = useTheme();

  const marginValues = {
    xs: theme.spacing(2),
    sm: theme.spacing(3),
    md: theme.spacing(4),
    lg: theme.spacing(5),
    xl: theme.spacing(5),
  };
  return (
    <Container sx={{ marginY: marginValues }}>
      <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
        <Typography
        backgroundColor={'#8a2be2'}
        color={'white'}
        >Created by JoseMalpe ©  2023</Typography>
      </Box>
      <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        <Footer>Created by JoseMalpe ©  2023</Footer>
      </Box>
    </Container>
  );
};

export default MyFooter;
