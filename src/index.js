import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from './component/redux/store.js'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@material-ui/core/styles';
import { createTheme } from '@mui/material/styles';
import './index.css';
import App from './App';
import AppRoutes from './Route/AppRoutes.js';
import { APP_ROUTES } from './Route/Routing.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
const theme = createTheme();
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Router>
        <App />
        <AppRoutes appRoutes={APP_ROUTES} />
      </Router>
    </ThemeProvider>
  </Provider>
);
