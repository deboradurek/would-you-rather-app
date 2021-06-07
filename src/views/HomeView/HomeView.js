import React, { Component } from 'react';
import { AppBar, Tab, Tabs, Box, Typography } from '@material-ui/core';

export default class HomeView extends Component {


  render() {

    return (
      <>
        <AppBar position="static">
          <Tabs value={} onChange={this.handleChange}>
            <Tab label="Unanswered Questions" />
            <Tab label="Answered Questions" />
          </Tabs>
        </AppBar>
        <TabPanel value={} index={0}>
          Unanswered Questions
        </TabPanel>
        <TabPanel value={} index={1}>
          Answered Questions
        </TabPanel>
      </>
    );
  }
}

function TabPanel(props) {
  const { children, value, index } = props;

  return (
    <div>
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
