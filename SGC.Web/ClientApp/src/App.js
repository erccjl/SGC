import React, { Component } from 'react';
import Layout from './components/Layout';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import store from './store';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/es';

const theme = createTheme({
  palette: {
    primary: {
      main: '#458e95', // color primario
      dark: '#3c757e', // tono oscuro del color primario
      light: '#bfe0e2', // tono claro del color primario
    },
    secondary: {
      main: '#94c9cc', // color secundario
      dark: '#ddeff0', // tono oscuro del color secundario
      light: '#325158', // tono claro del color secundario
    },
    error: {
      main: '#f24141', // color de error
      dark: '#d61f1f', // tono oscuro del color de error
      light: '#ffc9c9', // tono claro del color de error
    },
    warning: {
      main: '#ff9800', // color de advertencia
      dark: '#f57c00', // tono oscuro del color de advertencia
      light: '#ffb74d', // tono claro del color de advertencia
    },
    info: {
      main: '#00bcd4', // color de información
      dark: '#00838f', // tono oscuro del color de información
      light: '#4dd0e1', // tono claro del color de información
    },
    success: {
      main: '#4caf50', // color de éxito
      dark: '#388e3c', // tono oscuro del color de éxito
      light: '#81c784', // tono claro del color de éxito
    },
  },
});

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es">
            <Layout />
            <ToastContainer autoClose={false} draggable={false} />
          </ LocalizationProvider>
        </ThemeProvider>
      </Provider>
    );
  }
}
