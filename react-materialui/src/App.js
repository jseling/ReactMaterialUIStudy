import React from 'react';
import { ThemeProvider, createTheme, makeStyles } from '@material-ui/core';
import Home from './Home';

const useStyles = makeStyles({
  root: {
  }
});


function App() {

  const theme = createTheme({
    spacing: 4,
    palette: {      
      primary: {
        main: '#92b139',
      },
      secondary: {
        main: '#bfe2de',
      }
    },
  });

  const classes = useStyles();

  return (
  <ThemeProvider theme={theme}>
    <Home/>
  </ThemeProvider>
  );
}

export default App;
