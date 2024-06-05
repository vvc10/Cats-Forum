// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './Navbar.css';

const Navbar = () => {
  return (
    <AppBar position="fixed">
      <Toolbar className="navbar">
        <Typography variant="h6" className="navbar-title">
          Cat-Forum
        </Typography>
        <Button className='btn-link' color="inherit" component={Link} to="/">Home</Button>
        <Button className='btn-link' color="inherit" component={Link} to="/about">About</Button>
        <Button className='btn-link' color="inherit" component={Link} to="/contact">Contact</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
