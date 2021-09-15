import React from 'react';
import { Button, ThemeProvider, createTheme } from '@material-ui/core';

function App() {

  const theme = createTheme({
    palette: {
      primary: {
        main: '#f44336',
      },
    },
  });

  return (
  <ThemeProvider theme={theme}>
    <Button variant="contained" color="primary">
      Botão
    </Button>
  </ThemeProvider>
  );
}

export default App;
