import React from 'react';
import { Grid } from '@mui/material';

function SixColumn({ children }) {
    const columnContent = React.Children.toArray(children);

    return (
        <Grid container spacing={2} justifyContent="center">
            <Grid item xs={6} sm={3} md={2} xl={2} >
                {columnContent[0]}
            </Grid>

            <Grid item xs={6} sm={3} md={2} xl={2} >
                {columnContent[1]}
            </Grid>

            <Grid item xs={6} sm={3} md={2} xl={2} >
                {columnContent[2]}
            </Grid>

            <Grid item xs={6} sm={3} md={2} xl={2} >
                {columnContent[3]}
            </Grid>

            <Grid item xs={6} sm={3} md={2} xl={2} >
                {columnContent[4]}
            </Grid>

            <Grid item xs={6} sm={3} md={2} xl={2} >
                {columnContent[5]}
            </Grid>
        </Grid>
    );
};

export default SixColumn;