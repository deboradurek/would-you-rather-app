import React, { Component } from 'react';
import { AppBar, Tab, Tabs } from '@material-ui/core';
import TabPanel from '../../components/TabPanel';
import QuestionCard from './components/QuestionCard';

export default class HomeView extends Component {
  state = {
    tabIndex: 0,
  };

  handleChange = (e, newTabIndex) => {
    this.setState({
      tabIndex: newTabIndex,
    });
  };

  render() {
    const { tabIndex } = this.state;

    return (
      <>
        <AppBar position="static">
          <Tabs centered value={tabIndex} onChange={this.handleChange}>
            <Tab label="Unanswered Questions" />
            <Tab label="Answered Questions" />
          </Tabs>
        </AppBar>
        <TabPanel value={tabIndex} index={0}>
          <QuestionCard />
        </TabPanel>
        <TabPanel value={tabIndex} index={1}>
          Answered Questions
        </TabPanel>
      </>
    );
  }
}
