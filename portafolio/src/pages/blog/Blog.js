import { Container, Grid, Typography, useTheme } from "@mui/material";
import TwoColumn from "../core/TwoColumn";

export default function Blog() {
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
            <TwoColumn>
                <div>
                    <Typography variant="body1">
                        Apasionado del motor y amante de la tecnología, a mis 38 años decidí empezar a
                        estudiar de forma autodidacta Python, acabando en el HUB4T
                        Tecnocampus de Mataró estudiando FrontEnd (HTML y CSS, JavaScript y React),
                        descubriendo el apasionante mundo de la programación. Ahora después de 19 años
                        en el sector de la automoción he decidido cambiar de rumbo profesional y dedicarme
                        de pleno a la programación.
                    </Typography>
                </div>

            </TwoColumn>
        </Container>
    )
};