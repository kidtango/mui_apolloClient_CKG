import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';

import './app.css';
import { theme } from '../../material_ui/Theme';
import Dashboard from './dashboard/Dashboard';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <Dashboard />
      </div>
    </ThemeProvider>
  );
};

export default App;
