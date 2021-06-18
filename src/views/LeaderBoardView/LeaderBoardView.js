import React from 'react';
import { Box } from '@material-ui/core';
import LeaderCard from './components/LeaderCard';

export default function LeaderBoardView() {
  return (
    <Box paddingTop={3}>
      <LeaderCard />
    </Box>
  );
}
