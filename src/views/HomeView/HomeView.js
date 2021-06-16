import React, { Component } from 'react';
import { connect } from 'react-redux';
import getQuestions from '../../actions/questions';
import TabPanel from '../../components/TabPanel';
import QuestionCard from './components/QuestionCard';
import { Tab, Tabs } from '@material-ui/core';
import { StyledAppBar } from './styles';

class HomeView extends Component {
  state = {
    tabIndex: 0,
  };

  // Get Questions
  componentDidMount() {
    this.props.dispatch(getQuestions());
  }

  // Change unsanswered/answered tab
  handleChange = (_, newTabIndex) => {
    this.setState({
      tabIndex: newTabIndex,
    });
  };

  render() {
    const { tabIndex } = this.state;
    const { answeredQuestions, unansweredQuestions } = this.props;

    return (
      <>
        <StyledAppBar position="static">
          <Tabs centered value={tabIndex} onChange={this.handleChange}>
            <Tab label="Unanswered Questions" />
            <Tab label="Answered Questions" />
          </Tabs>
        </StyledAppBar>

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
      </>
    );
  }
}

function mapStateToProps({ authedUser, users, questions: { questions } }) {
  const sortedQuestions = Object.values(questions).sort((a, b) => b.timestamp - a.timestamp);
  const userAnswers = users[authedUser.id].answers;
  return {
    authedUser: authedUser.id,
    answeredQuestions: sortedQuestions.filter((q) => userAnswers[q.id]),
    unansweredQuestions: sortedQuestions.filter((q) => !userAnswers[q.id]),
  };
}

export default connect(mapStateToProps)(HomeView);
