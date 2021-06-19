import React from 'react';
import { Box } from '@material-ui/core';
import LeaderCard from './components/LeaderCard';

function LeaderBoardView() {
  return (
    <Box paddingTop={3}>
      <LeaderCard />
    </Box>
  );
}

export default LeaderBoardView;
