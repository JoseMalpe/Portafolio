import React from 'react';
import { Grid } from '@mui/material';

function TwoColumn({ children }) {
    const columnContent = React.Children.toArray(children);

    return (
        <Grid container spacing={2} padding={2} >
            <Grid item xs={12} md={6} >
                {columnContent[0]}
            </Grid>

            <Grid item xs={12} md={6} >
                {columnContent[1]}
            </Grid>
        </Grid>
    );
};

export default TwoColumn;
