import React from 'react';
import { Grid } from '@mui/material';

function ProyectColumns({ children }) {
    const columnContent = React.Children.toArray(children);

    return (
        <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={6} md={4} xl={4} >
                {columnContent[0]}
            </Grid>

            <Grid item xs={12} sm={6} md={4} xl={4} >
                {columnContent[1]}
            </Grid>

            <Grid item xs={12} sm={6} md={4} xl={4} >
                {columnContent[2]}
            </Grid>
        </Grid>
    );
};

export default ProyectColumns;