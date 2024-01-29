import React from 'react';
import { Grid } from '@mui/material';

function ThreeColumn({ children }) {
    const columnContent = React.Children.toArray(children);

    return (
        <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={6} md={3} xl={2} >
                {columnContent[0]}
            </Grid>

            <Grid item xs={12} sm={6} md={3} xl={2} >
                {columnContent[1]}
            </Grid>

            <Grid item xs={12} sm={63} md={3} xl={2} >
                {columnContent[2]}
            </Grid>
        </Grid>
    );
};

export default ThreeColumn;