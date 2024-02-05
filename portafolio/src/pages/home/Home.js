import { Chip, Container, Divider, Grid, Typography, useTheme } from '@mui/material'
import './Home.css'
import React from 'react';
import Social from '../redes/Social';

export default function Home() {
    const theme = useTheme();

    const marginValues = {
        xs: theme.spacing(6),
        sm: theme.spacing(8),
        md: theme.spacing(10),
        lg: theme.spacing(10),
        xl: theme.spacing(10),
    };
    return (
        <Container sx={{ marginY: marginValues }}>
            <Grid item padding={4} >
                <img className="img" src='img\img firma.png' />
                <Typography variant='h2' paddingTop={'100px'}>José María Alcaraz Pérez</Typography>
                <Typography variant='body1' >Desarrollador FrontEnd</Typography>
                <Typography variant='body1' paddingBottom={10}>apasionado del motor y de la tecnología</Typography>
                <Divider color='white' padding={4} >
                    <Chip label="Redes" size="small" color="info" />
                </Divider>
                <Social />
            </Grid>
        </Container>
    )
};