import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardContent, Typography } from '@material-ui/core/';
import Navbar from '../components/layout/Navbar';

const style = {
  cardStyle: {
    width: '60%',
    margin: 'auto',
    textAlign: 'center'
  },
  textStyle: {
    fontSize: '2rem'
  },
  linkStyle: {
    justifyContent: 'center',
    textDecoration: 'none',
    color: '#fff'
  }
};

const NotFound = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Card style={style.cardStyle}>
        <CardContent>
          <Typography color='textPrimary' style={style.textStyle}>
            404 Page Not Found
          </Typography>
          <Button variant='contained' color='primary'>
            <Link to='/' style={style.linkStyle}>
              Home
            </Link>
          </Button>
        </CardContent>
      </Card>
    </React.Fragment>
  );
};

export default NotFound;
