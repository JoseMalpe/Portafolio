import { Grid, Typography } from "@mui/material";

export default function SobreMi() {
    return (
        <Grid container justifyContent={"center"}>
            <Grid item xs={2} sm={3} md={4} lg={6} padding={4}>
                <Typography variant="body1">
                    Apasionado del motor y amante de la tecnología, a mis 38 años decidí empezar a estudiar Python, acabando en el Tecnocampus de Mataró estudiando FrontEnd (HTML y CSS, JavaScript y React), descubriendo el apasionante mundo de la programación. Ahora después de 19 años en el sector de la automoción he decidido cambiar de rumbo profesional y dedicarme de pleno a la programación.
                </Typography>
            </Grid>
        </Grid>
    )
};