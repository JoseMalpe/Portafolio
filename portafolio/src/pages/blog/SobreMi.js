import { Grid, Typography } from "@mui/material";

export default function SobreMi() {
    return (
        <Grid container justifyContent={"center"}>
            <Grid item xs={2} sm={3} md={4} lg={6} padding={4}>
                <Typography variant="body1">
                    Me considero una persona creativa, dinamica, con vision de lograr mas de los 
                    siguientes objetivos planteados,
                    habilidades comunicativas, trabajo en equipo, con 
                    capacidades de liderazgo, perseverancia, actitud responsable y resolutiva.
                    <br></br>
                    <br></br>
                    Actualmente me gustaria trabajar desarrollando mi propia carrera en el sector
                    tecnologico en el area de programacion FrontEnd Web Developer y actualmente en curso
                    en Java BackEnd Web Developer.
                </Typography>

            </Grid>
        </Grid>
    )
};