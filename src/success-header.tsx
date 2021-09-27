import React from 'react';
import './success-header.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'

const Header = () => (
  //Referenced appBar examples for material UI for this since it looked nice and clean
    <Box sx={{ flexGrow: 1 }}>
    <AppBar 
    position="static"
    >
      <Toolbar>
      <img className="header" src={"https://getbuilt.com/wp-content/themes/builtwp/img/blt-brandmark.svg"} alt="builtLogo"/>
        <Typography component="div" sx={{ flexGrow: 1 }}> Success Page
        </Typography>
        <Button className="roundButton" variant="outlined"  color="inherit" href="https://getbuilt.com/">Get Built</Button>
      </Toolbar>
    </AppBar>
  </Box>
)

export default Header;