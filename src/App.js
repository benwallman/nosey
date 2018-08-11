import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';

import Home from './Pages/Home';
import Welcome from './Pages/Welcome';
import theme from './theme';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayWelcome: false,
      displayHome: false,
    };
  }
  checkUrl = () => {
    if(window.location.href.includes('welcome')) {
      this.setState({
        displayWelcome: true,
      })
    }
    if(window.location.href.includes('home')) {
      this.setState({
        displayHome: true,
      })
    }
  };
  componentDidMount() {
    this.checkUrl();
    window.addEventListener('popstate', () => {
      this.checkUrl();
    });
  }
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          { this.state.displayWelcome ? <Welcome /> : null }
          { this.state.displayHome ? <Home /> : null }
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App;
