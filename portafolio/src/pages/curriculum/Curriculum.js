import Logos from '../home/Logos'
import TwoColumn from "../core/TwoColumn";
import React from 'react';
import Button from '@mui/material/Button';
import { Container, Divider, Grid, Typography, useTheme } from '@mui/material';

const Curriculum = () => {
    const handleDescargarPDF = () => {
        // Reemplaza 'ruta/del/archivo.pdf' con la ruta de tu archivo PDF
        const archivoPDF = './CV.pdf';
        // Crear un elemento <a> temporal para descargar el PDF
        const link = document.createElement('a');
        link.href = archivoPDF;
        link.download = 'CV.pdf'; // Nombre del archivo al descargar
        link.click();
    };

    const theme = useTheme();

    const marginValues = {
        xs: theme.spacing(6),
        sm: theme.spacing(8),
        md: theme.spacing(10),
        lg: theme.spacing(10),
        xl: theme.spacing(10),
    };

    return (
        <Container sx={{ marginY: marginValues }} spacing={4}>
            <Grid item textAlign={'center'}>
                <Button variant="contained" color="info" onClick={handleDescargarPDF}>
                    Curriculum
                </Button>
            </Grid>
            <br></br>
            <TwoColumn>
                <div>
                    <ul>
                        <h2>Formación</h2>
                        <li>
                            HUBTecnocampus (UPF)
                            Bootcamp Java Backend Web Developer  (240H) (Python) (en curso)
                        </li>
                        <li>
                            HUBTecnocampus (UPF)
                            Bootcamp FrontEnd Web Developer  (240H) (HTML, CSS, javascript, React) (2023)
                        </li>
                        <li>
                            IES Miquel Biada (Mataró)
                            Técnico electromecánico de vehículos (2003-2005)
                        </li>
                        <li>
                            Escoles Freta (Mataró)
                            Técnico en gestión administrativa (2001-2002)
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <h2>Experiencia</h2>
                        <li>
                            Softil/Oxydiom: Software frontend developer. Dic 2022 - actualidad.
                            Desarrollo de proyectos bajo metodologías ágiles (scrum)
                            de distintas soluciones para portales ecommerce y adaptados
                            a soluciones móviles en formato responsive.
                            (SaaS, , Mobile) e interlocución con cliente final.
                        </li>
                        <li>
                            Proyecto de ecommerce virtual de ropa con compra a través de pasarela de pago
                            (redsys). (html, css, react, mysql, boostrap)
                        </li>
                        <li>
                            Proyecto de tienda de vinos con adaptación para Tablet y móvil desde plataforma
                            (html, css, react, javascript, mongoDB).
                        </li>
                        <li>
                            Proyecto portal taller mecánico con calendario de reservas (html, css, react, mongodb).
                        </li>
                        <li>
                            Proyecto de generación de player con gestión de canciones via api rest en formato Spotify
                            (css, react, javascript)
                        </li>
                        <li>
                            Proyecto de generación de player con gestión de canciones via api rest en formato Spotify
                            (css, react, javascript)
                        </li>
                        <li>
                            Automóviles Delmar S.A .Sep 2005 - nov 2022
                            Electromecánico especializado en electricidad y la electrónica del automóvil
                            (reprogramación de centralitas, reparación de electrónica de cuadros de instrumentos, reparación o clonación de centralitas).  Respondiendo ante el gerente de taller y
                            con responsabilidad de gestión de equipo de personas.
                        </li>
                    </ul>
                </div>
            </TwoColumn>

        </Container>

    );
};

export default Curriculum;
