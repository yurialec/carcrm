import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import { green, } from '@mui/material/colors';
import 'bootstrap/dist/css/bootstrap.min.css';
import Rotas from './Rotas';

const theme = createTheme({
  palette: {
    primary: {
      main: green[500],
    },
  },
  MuiSelect: {
    variant: 'outlined',
    fullWidth: true
  }
});

const App = () => (
  <ThemeProvider theme={theme}>
    <Rotas />
  </ThemeProvider>
)

export default App;