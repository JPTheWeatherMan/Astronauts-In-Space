import React, { Component } from 'react';
import Spinner from '../layout/Spinner';
import { Card, CardContent, Typography } from '@material-ui/core';
import Axios from 'axios';

export default class Astronaut extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      astronauts: []
    };
  }
  componentDidMount() {
    Axios.get(`http://api.open-notify.org/astros.json`).then(results =>
      this.setState({ loading: false, astronauts: results.data.people })
    );
  }

  style = {
    cardStyle: {
      width: '60%',
      margin: '20px auto'
    },
    cardHeaderStyle: {
      textAlign: 'center'
    },
    cardContentStyle: {
      display: 'flex',
      justifyContent: 'space-around'
    }
  };

  render() {
    if (this.state.loading) {
      return <Spinner />;
    } else {
      return (
        <React.Fragment>
          <Card style={this.style.cardStyle}>
            <CardContent>
              <Typography variant={'h4'} style={this.style.cardHeaderStyle}>
                Astronauts currently in space
              </Typography>
            </CardContent>
          </Card>
          {this.state.astronauts.map(astronaut => (
            <Card style={this.style.cardStyle}>
              <CardContent style={this.style.cardContentStyle}>
                <Typography>Name: {astronaut.name}</Typography>
                <Typography>Craft: {astronaut.craft}</Typography>
              </CardContent>
            </Card>
          ))}
        </React.Fragment>
      );
    }
  }
}
