import { Grid, Typography } from '@mui/material';

const InformationBar= ({ t, i18n }) => {
    return (
        <Grid container>
            <Grid item xs={12} sm={12} md={6} lg={6} style={{ color: 'white'}}>
                <Typography>Jose</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} style={{ color: 'white'}}>
                <Typography>Mataró</Typography>                
            </Grid>
            <Grid item>
            </Grid>
        </Grid>
    )
}
export default InformationBar;