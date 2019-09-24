import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';
import { Button, Card } from '@material-ui/core';

const style = {
  navbarStyle: {
    width: '100%',
    height: '10vh',
    borderRadius: '0',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#1769aa'
  },
  navListStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '15vw'
  },
  navLinkStyle: {
    textDecoration: 'none',
    padding: '0 2px',
    color: '#fff'
  }
};

const Navbar = () => {
  return (
    <Card style={style.navbarStyle}>
      <FontAwesomeIcon icon={faGlobeAmericas} size='3x' />
      <ul style={style.navListStyle}>
        <Button variant='contained' color='primary'>
          <Link to='/' style={style.navLinkStyle}>
            Home
          </Link>
        </Button>
        <Button variant='contained' color='primary'>
          <Link to='/About' style={style.navLinkStyle}>
            About
          </Link>
        </Button>
      </ul>
    </Card>
  );
};

export default Navbar;
