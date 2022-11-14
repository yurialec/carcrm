import React from 'react';
import { Provider } from 'react-redux'; 
import { store } from './store/store';
import { createTheme, ThemeProvider } from '@mui/material';
import { green, } from '@mui/material/colors';
import 'bootstrap/dist/css/bootstrap.min.css';
import './global.css'
import Rotas from './Rotas';

import { Loading, Notify } from './view/components';

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
        <Notify />
        <Loading />
        <Rotas />
      </ThemeProvider>
    </Provider>
)

export default App;