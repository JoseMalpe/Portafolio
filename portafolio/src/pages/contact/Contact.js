import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import { Container, Grid, Link, Typography, useTheme } from '@mui/material';
import TwoColumn from '../core/TwoColumn';

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
      <Container sx={{ marginY: marginValues }} >
        <TwoColumn>
          <Grid>
          <List
              sx={{ width: '100%', maxWidth: 360 }}
              component="nav"
            >
              </List>
          </Grid>
          <Grid padding={4} textAlign={'center'}>
            <List
              sx={{ width: '100%', maxWidth: 360 }}
              component="nav"
            >
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
              <ListItemButton>
                <ListItemIcon>
                  <LocationOnIcon />
                </ListItemIcon>
                <Link href="https://maps.app.goo.gl/r11ZpSNudqyfWp6e7" target="_blank">Mataro, 08304, Barcelona</Link>
              </ListItemButton>
            </List>
          </Grid>
        </TwoColumn>
      </Container>
    </>
  )
}