import * as React from 'react';
import { createTheme, Select, TextField, ThemeProvider } from '@mui/material';
import Button from '@mui/material/Button';
import { green, red } from '@mui/material/colors';

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
    <TextField fullWidth variant='outlined'/>
    <br/>
    <Select></Select>
    <br/>
    <Button color="success">primary</Button>
  </ThemeProvider>
)

export default App;