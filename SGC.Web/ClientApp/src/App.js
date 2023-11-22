import React, { Component } from 'react';
import Layout from './components/Layout';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import store from './store';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const theme = createTheme({
  palette: {
    primary: {
      main: '#2196f3', // color primario
      dark: '#1769aa', // tono oscuro del color primario
      light: '#4dabf5', // tono claro del color primario
    },
    secondary: {
      main: '#ff4081', // color secundario
      dark: '#c51162', // tono oscuro del color secundario
      light: '#ff79b0', // tono claro del color secundario
    },
    error: {
      main: '#f44336', // color de error
      dark: '#d32f2f', // tono oscuro del color de error
      light: '#e57373', // tono claro del color de error
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
            <Layout />
            <ToastContainer autoClose={false} draggable={false} />
        </ThemeProvider>
      </Provider>
    );
  }
}
