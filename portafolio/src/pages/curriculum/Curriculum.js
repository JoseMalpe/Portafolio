import Logos from '../home/Logos'
import TwoColumn from "../core/TwoColumn";
import React from 'react';
import Button from '@mui/material/Button';
import { Container, Grid, Typography, useTheme } from '@mui/material';

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
        <Container sx={{ marginY: marginValues }}>
            <Button variant="contained" color="info" onClick={handleDescargarPDF}>
                Curriculum
            </Button>
            <TwoColumn>
                <div>

                </div>
                <div>

                </div>
            </TwoColumn>

        </Container>

    );
};

export default Curriculum;
