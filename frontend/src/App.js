import * as React from 'react';
import { createTheme, Select, TextField, ThemeProvider } from '@mui/material';
import { green, red } from '@mui/material/colors';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './Routes';

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
    <Routes />
  </ThemeProvider>
)

export default App;