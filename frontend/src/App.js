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
  </ThemeProvider>
)

export default App;