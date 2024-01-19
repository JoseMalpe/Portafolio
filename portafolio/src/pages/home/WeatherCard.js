import React, { useState, useEffect } from 'react';
import { Card, CardContent, Grid, Typography } from '@mui/material';

function WeatherComponent({}) {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://www.el-tiempo.net/api/json/v1/provincias/08/municipios/08027/weather');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data)
        setWeatherData(data);
      } catch (error) {
        console.error('There was a problem fetching the data:', error);
      }
    };

    fetchData();
  }, []);

  function obtenerFechaEnFormato(param) {
    const meses = [
      "ene", "feb", "mar", "abr", "may", "jun",
      "jul", "ago", "sep", "oct", "nov", "dic"
    ];
    const fecha = new Date(param);
    const dia = fecha.getDate();
    const mes = meses[fecha.getMonth()];

    // Agregar un cero si el día es menor que 10 para mantener el formato "dd"
    const diaFormateado = dia < 10 ? `0${dia}` : dia;

    return `${diaFormateado} ${mes}`;
  }

  return (
    <div>
      <h2>Temperatura</h2>
      {weatherData ? (
        <Grid container spacing={2} maxWidth={'300'}>
          {weatherData.prediccion.dia.map((day, index) => (
            <Grid key={index} item xs={12} sm={6} md={4} lg={3} >
              <Card elevation={3}>
                <CardContent>
                  <Typography align='center'>
                    {obtenerFechaEnFormato(day['@attributes'].fecha)}
                  </Typography>
                  <Typography fontWeight='bold' align='center'>
                    <span style={{ color: 'red' }}>
                      {day.temperatura.maxima}°
                    </span>
                    <span> / </span>
                    <span style={{ color: '#8282E8' }}>
                      {day.temperatura.minima}°
                    </span>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default WeatherComponent;
