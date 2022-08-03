import { PaletteOptions } from '@mui/material';

type IPalette = PaletteOptions;

// custom here
const palette: IPalette = {
    primary: {
        light: '#757ce8',
        main: '#3f50b5',
        dark: '#002884',
        contrastText: '#fff',
    },
    error: {
        main: '#d63031',
    },
    secondary: {
        main: '#656565',
        dark: '#6c6b6b',
        light: '#f3f2f1',
    },

    success: {
        main: '#2E7D32',
    },
};

export default palette;
