import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import LeaderCard from './components/LeaderCard';

class LeaderBoardView extends Component {
  render() {
    return (
      <div>
        <Typography variant="h5" component="h2">
          LeaderBoard{' '}
        </Typography>
        <LeaderCard />
      </div>
    );
  }
}

export default LeaderBoardView;
