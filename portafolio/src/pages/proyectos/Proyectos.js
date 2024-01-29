import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Container, Link, Typography } from '@mui/material';
import TransitionHover from '../../components/TransitionHover';
import ThreeColumn from '../core/ThreeColumns';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'transparent',
    ...theme.typography.body2,
    display: 'flex',
    placeItems: 'center',
    color: theme.palette.text.secondary,
}));

export default function Proyectos() {
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
            <Typography variant='h4' textAlign={'center'}>Proyectos</Typography>
            <ThreeColumn>
                <div>
                    <Link href="https://vinos-7f430.web.app/" target="_blank">
                        <TransitionHover imageUrl='img\main-rev-img-1.jpg' />
                    </Link>
                    <Typography>Página de vinos utilizando React</Typography>
                </div>
                <div>
                    <Link href="https://krebel.es/" target="_blank" >
                        <TransitionHover imageUrl='img\logokrebel.jpg' />
                    </Link>
                    <Typography>Página de venta de ropa de ceremonia utilizando React</Typography>
                </div>
                <div>
                <Link href="https://fervic.es/" target="_blank" >
                        <TransitionHover imageUrl='img\LogoFerVic.jpeg' />
                    </Link>
                </div>
            </ThreeColumn>
        </Container>
    )
} 