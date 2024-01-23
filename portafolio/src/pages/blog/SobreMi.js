import { Grid, Typography } from "@mui/material";

export default function SobreMi() {
    return (
        <Grid container justifyContent={"center"}>
            <Grid item xs={2} sm={3} md={4} lg={6} padding={4}>
                <Typography variant="body1">
                    Soy una persona inquieta y curiosa, en constante aprendizaje.
                    Si algo me apasiona o me interesa, simplemente me centro en
                    aprenderlo todo sobre ello. Apasionado del mundo del motor y
                    de la tecnología, tras estudiar automoción tuve la suerte de
                    quedarme en el concesionario donde hice prácticas, hecho que
                    hizo que me centrara en la automoción y me dedicara a formarme
                    en todos los ámbitos dentro de un taller, mecánica, electricidad
                    y diagnóstico, llegando a la máxima categoría dentro del personal
                    de taller (Cotec Renault).
                    Tras casi 20 años en el sector, he decidido cambiar totalmente de 
                    rumbo profesional y dedicarme al desarrollo.
                </Typography>
            </Grid>
        </Grid>
    )
};