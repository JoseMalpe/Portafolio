import { Grid, Link } from "@mui/material";
import TransitionHover from "../../components/Theme";

const images = [
  '/img/HTML5.svg',
  '/img/CSS3.png',
  '/img/Javascript.svg',
  '/img/React.png',
];

const routes = [
  "/ruta-del-enlace-1",
  "/ruta-del-enlace-2",
  "/ruta-del-enlace-3",
  "/ruta-del-enlace-4",
];

const Logos = () => {
  return (
    <Grid container spacing={2}>
      {images.map((image, index) => (
        <Grid item xs={6} sm={3} md={3} lg={3} key={index}>
          <Link to={routes[index]}>
            <img
              src={image}
              alt={`Imagen ${index + 1}`}
              style={{ width: '200px', maxWidth: '200px', height: '200px', padding: '50px' }}
            />
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default Logos;