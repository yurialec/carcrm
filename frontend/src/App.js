import React from 'react';
import { Provider } from 'react-redux'; 
import { store } from './store/store';
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
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Rotas />
      </ThemeProvider>
    </Provider>
)

export default App;