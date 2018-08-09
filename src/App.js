import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';

import Home from './Pages/Home';
import Welcome from './Pages/Welcome';
import theme from './theme';
import './App.css';

const App = () => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <div className="App">
      <Welcome />
      <Home />
    </div>
  </MuiThemeProvider>
);

export default App;
