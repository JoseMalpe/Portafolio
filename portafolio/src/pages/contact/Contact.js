import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import { Container, Grid, Link, Typography, useTheme } from '@mui/material';

export default function Contact() {
  const theme = useTheme();

  const marginValues = {
    xs: theme.spacing(6),
    sm: theme.spacing(8),
    md: theme.spacing(10),
    lg: theme.spacing(10),
    xl: theme.spacing(10),
  };
  return (
    <>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11944.351479537057!2d2.4510464!3d41.54569465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2ses!4v1703026625871!5m2!1ses!2ses"
        width="100%"
        height="450"
        style={{ border: 0 }}
        loading="lazy"
      />
      <Container sx={{ marginY: marginValues }}>
        <Grid padding={4}>
          <List
            sx={{ width: '100%', maxWidth: 360 }}
            component="nav"
            subheader={
              <ListItemText>
                <Typography variant="h5">contacto</Typography>
              </ListItemText>
            }
          >
            <ListItemButton>
              <ListItemIcon>
                <LocationOnIcon />
              </ListItemIcon>
              <Link href="https://maps.app.goo.gl/r11ZpSNudqyfWp6e7" target="_blank">Mataro, 08304, Barcelona</Link>
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <EmailIcon />
              </ListItemIcon>
              <Link href="mailto:jmalcarazp@gmail.com">jmalcarazp@gmail.com</Link>
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <PhoneAndroidIcon />
              </ListItemIcon>
              <Link href="tel:637017987">637017987</Link>
            </ListItemButton>
          </List>
        </Grid>
      </Container>
    </>
  )
}