import React from 'react';
import { makeStyles, AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';



const useStyles = makeStyles((theme)=>({
    root: {
    //   background: theme.palette.primary.main,
    //   padding: theme.spacing(2),
      height: '100vh',
    },
    appBar: {
        boxShadow: 'none',
    },
    grow: {
        flexGrow: 1,
    }
  }));
  

function Home() {
    const classes = useStyles();

    return (
    <div className={classes.root}>
        <AppBar className={classes.appBar}> {/*color='inherit'*/} 
        <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
                Sistema Emanar
            </Typography>
            <div className={classes.grow}/>
            <Button variant="outlined" color="inherit" startIcon={<AccountCircleIcon />}>Login</Button>
        </Toolbar>
        </AppBar>


    </div>
    );
}

export default Home;