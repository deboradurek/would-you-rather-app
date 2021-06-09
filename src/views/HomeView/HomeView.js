import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AppBar, Card, CardContent, Tab, Tabs } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import TabPanel from '../../components/TabPanel';
import QuestionCard from './components/QuestionCard';
import getQuestions from '../../actions/questions';

class HomeView extends Component {
  state = {
    tabIndex: 0,
  };

  componentDidMount() {
    this.props.dispatch(getQuestions());
  }

  handleChange = (e, newTabIndex) => {
    this.setState({
      tabIndex: newTabIndex,
    });
  };

  render() {
    const { tabIndex } = this.state;
    const { isLoading, questionsIds } = this.props;

    return (
      <>
        <AppBar position="static">
          <Tabs centered value={tabIndex} onChange={this.handleChange}>
            <Tab label="Unanswered Questions" />
            <Tab label="Answered Questions" />
          </Tabs>
        </AppBar>

        {!isLoading ? (
          <>
            {questionsIds.map((questionId) => (
              <TabPanel key={questionId} value={tabIndex} index={0}>
                <QuestionCard questionId={questionId} />
              </TabPanel>
            ))}

            <TabPanel value={tabIndex} index={1}>
              Unanswered Questions
            </TabPanel>
          </>
        ) : (
          Array.from({ length: 3 }).map((_, index) => (
            <Card variant="outlined" key={`placeholder-${index}`}>
              <CardContent>
                <Skeleton variant="rect" height={300} />
              </CardContent>
            </Card>
          ))
        )}
      </>
    );
  }
}

function mapStateToProps({ questions: { isLoading, questions } }) {
  return {
    isLoading,
    questionsIds: Object.keys(questions).sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    ),
  };
}

export default connect(mapStateToProps)(HomeView);
