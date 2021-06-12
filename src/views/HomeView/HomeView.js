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
    const { isLoading, answeredQuestions, unansweredQuestions } = this.props;

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
            <TabPanel value={tabIndex} index={0}>
              {unansweredQuestions.map((question) => (
                <QuestionCard key={question.id} question={question} />
              ))}
            </TabPanel>
            <TabPanel value={tabIndex} index={1}>
              {answeredQuestions.map((question) => (
                <QuestionCard key={question.id} question={question} />
              ))}
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

function mapStateToProps({ users, questions: { isLoading, questions } }) {
  const sortedQuestions = Object.values(questions).sort((a, b) => b.timestamp - a.timestamp);
  const userAnswers = users['sarahedo'].answers;
  return {
    isLoading,
    answeredQuestions: sortedQuestions.filter((q) => userAnswers[q.id]),
    unansweredQuestions: sortedQuestions.filter((q) => !userAnswers[q.id]),
  };
}

export default connect(mapStateToProps)(HomeView);
