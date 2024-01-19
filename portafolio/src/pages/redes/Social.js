import { Grid, Link } from "@mui/material";
import { NavLink } from 'react-router-dom';

export default function Social() {
    return (
        <Grid container spacing={2}>
            <Grid item>
                <NavLink to="https://www.linkedin.com/in/jose-alcaraz-perez/" target="_blank" sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
                    <img
                        src={'/img/linkedin.png'}
                        width={100}
                        height={'auto'}
                        style={{ margin: '10px' }}
                        alt="Logo"
                    />
                </NavLink>
            </Grid>
            <Grid item>
                <NavLink to="https://github.com/JoseMalpe" target="_blank" sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
                    <img
                        src={'/img/GitHub.png'}
                        width={100}
                        height={'auto'}
                        style={{ margin: '10px' }}
                        alt="Logo"
                    />
                </NavLink>
            </Grid>
        </Grid>
    )
};