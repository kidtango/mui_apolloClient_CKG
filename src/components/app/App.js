import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';

import { theme } from '../../material_ui/Theme';
import Dashboard from './dashboard/Dashboard';

const AppContext = React.createContext();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Dashboard />
    </ThemeProvider>
  );
};

export default App;
