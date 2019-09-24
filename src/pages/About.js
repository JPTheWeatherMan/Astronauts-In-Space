import React from 'react';
import Navbar from '../components/layout/Navbar';
import { Card, CardContent, Typography, Button } from '@material-ui/core';

const style = {
  cardStyle: {
    width: '60%',
    margin: '20px auto',
    textAlign: 'Center'
  },
  buttonStyle: {
    marginTop: '20px'
  },
  LinkStyle: {
    textDecoration: 'none',
    color: '#fff'
  }
};

const About = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Card style={style.cardStyle}>
        <CardContent>
          <Typography style={style.textStyle}>App v1.0</Typography>
          <Typography style={style.textStyle}>
            This web app was developed by Jarrett Hale who can be reached at
            JarrettPHale@gmail.com
          </Typography>
          <Button variant='contained' color='primary' style={style.buttonStyle}>
            <a
              href='https://www.linkedin.com/in/jarrett-hale-a82253189/'
              target='_blank'
              rel='noopener noreferrer'
              style={style.LinkStyle}
            >
              LinkedIn
            </a>
          </Button>
        </CardContent>
      </Card>
    </React.Fragment>
  );
};

export default About;
