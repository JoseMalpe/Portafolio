import './App.css';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import Home from './pages/home/Home';
import Proyectos from './pages/proyectos/Proyectos';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ThemeContext } from '@emotion/react';
import React, { Suspense } from 'react';
import { createTheme } from '@mui/material/styles';
import { DEFAULT_THEME, getDesignPalette } from './services/theme';
import AppLayout from './layouts/AppLayout';
import NotFound from './pages/not-found/NotFound';
import Contact from './pages/contact/Contact';
import Curriculum from './pages/curriculum/Curriculum';
import SobreMi from './pages/blog/SobreMi';

const firebaseConfig = {
  apiKey: "AIzaSyAldeNteCNkkOpn8QgbJPiFEQ05UOAJQY0",
  authDomain: "portafolio-25b46.firebaseapp.com",
  projectId: "portafolio-25b46",
  storageBucket: "portafolio-25b46.appspot.com",
  messagingSenderId: "51985598520",
  appId: "1:51985598520:web:263b0f45087ff86b1e7ecd",
  measurementId: "G-NH971R7JKG"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Suspense><AppLayout /></Suspense>,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'proyectos',
        element: <Proyectos />
      },
      {
        path: 'contacto',
        element: <Contact />
      },
      {
        path: 'sobremi',
        element: <SobreMi />
      },
      {
        path: 'curriculum',
        element: <Curriculum />
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
]);

function App() {
  const [theme, setTheme] = React.useState(DEFAULT_THEME);
  const toggleTheme = () => {
    console.log('Theme:', theme);
    setTheme(theme === DEFAULT_THEME ? 'dark' : DEFAULT_THEME);
  }
  return (
    <ThemeContext.Provider value={
      {
        theme,
        toggleTheme
      }
    }>
      <ThemeProvider theme={createTheme(getDesignPalette(theme))}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}


export default App;
