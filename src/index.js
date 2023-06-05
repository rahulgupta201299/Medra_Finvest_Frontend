import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from './component/redux/store.js'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@material-ui/core/styles';
import { createTheme } from '@mui/material/styles';
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import './index.css';
import App from './App';
import AppRoutes from './Route/AppRoutes.js';
import { APP_ROUTES } from './Route/Routing.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
const theme = createTheme();
const persistor = persistStore(store);
root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <ThemeProvider theme={theme}>
        <Router>
          <App />
          <AppRoutes appRoutes={APP_ROUTES} />
        </Router>
      </ThemeProvider>
    </PersistGate>
  </Provider>
);
