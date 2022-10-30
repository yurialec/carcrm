import * as React from 'react';
import { createTheme, Select, TextField, ThemeProvider } from '@mui/material';
import { green, red } from '@mui/material/colors';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    <h1>Home</h1>
  </ThemeProvider>
)

export default App;