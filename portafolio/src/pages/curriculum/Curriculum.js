import Logos from '../home/Logos'
import TwoColumn from "../core/TwoColumn";
import React from 'react';
import Button from '@mui/material/Button';
import { Container, Grid, Typography, useTheme } from '@mui/material';

const Curriculum = () => {
    const handleDescargarPDF = () => {
        // Reemplaza 'ruta/del/archivo.pdf' con la ruta de tu archivo PDF
        const archivoPDF = './CurriculumVitae.pdf';
        // Crear un elemento <a> temporal para descargar el PDF
        const link = document.createElement('a');
        link.href = archivoPDF;
        link.download = 'CurriculumVitae.pdf'; // Nombre del archivo al descargar
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
        <Container sx={{ marginY: marginValues }}>
            <TwoColumn>
                <div>
                    <Typography variant='h4'>Experiencia</Typography>
                    <Typography variant='body1'>
                        Josmigmar, Mataró
                        Septiembre del 2001 - 18 de septiembre del 2005
                        Repartidor en empresa textil
                        Automòbils Delmar, S.A (Concesionario Renault) , Mataró
                        18 de Septiembre del 2005-PRESENTE
                        Mecánico del 2005 al 2010
                        Electromecánico 2010 al 2018
                        Técnico en sistemas GLP Renault 2015
                        Cotec 2018 a la actualidad
                        Técnico de corte de alta tensión Renault 2019
                        Técnico Z.E Renault 2020
                    </Typography>
                </div>
                <div>
                    <Typography variant='h4'>Formación</Typography>
                    <Typography variant='body1'>
                        Escoles Freta, Mataró
                        ESO 1996-2000
                        Bachillerato Ciencias de la Salud 2000-2001
                        Técnico en Gestión Administrativa 2001-2002
                        IES Miquel Biada, Mataró
                        Técnico en electromecánica de vehículos 2003-2005
                        HUB4T Tecnocampus, Mataró
                        FrontEnd Web Developer (240h) 2023
                        (HTML, CSS, JavaScript y React)

                    </Typography>
                </div>
            </TwoColumn>
            <Logos />
            <Button variant="contained" color="info" onClick={handleDescargarPDF}>
                Curriculum
            </Button>
        </Container>

    );
};

export default Curriculum;
