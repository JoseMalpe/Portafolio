import React from "react";
export const DEFAULT_THEME = 'light';
export const getDesignPalette = (mode) => ({
    palette: {
        mode,
        ...(mode === DEFAULT_THEME
            ? {
                // palette values for light mode
                primary: {
                    main: '#83B420'
                },
                secondary: {
                    main: '#800020'
                },
            }
            : {
                // palette values for dark mode
                primary: {
                    main: '#82C214',
                },
                secondary: {
                    main: '#F13131',
                },
            }),
    },
    typography: {
        fontFamily: [
          'Montserrat',
          'sans-serif',
        ].join(','),
      },
});
export const ThemeContext = React.createContext({
    theme: DEFAULT_THEME,
    toggleTheme: () => {},
});
