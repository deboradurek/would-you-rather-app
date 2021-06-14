import { _getQuestions, _saveQuestion, _saveQuestionAnswer } from '../utils/_DATA';
import { addUserAnswer, saveQuestionToUser } from './users';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const RECEIVING_QUESTIONS = 'RECEIVING_QUESTIONS';
export const SAVE_QUESTION = 'SAVE_QUESTION';
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER';

// Receive Questions

function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

function receivingQuestions() {
  return {
    type: RECEIVING_QUESTIONS,
  };
}

export default function getQuestions() {
  return (dispatch) => {
    dispatch(receivingQuestions());
    return _getQuestions().then((questions) => dispatch(receiveQuestions(questions)));
  };
}

// Save Questions

function addQuestion(question) {
  return {
    type: SAVE_QUESTION,
    question,
  };
}

export function saveQuestion(optionOneText, optionTwoText, author) {
  return (dispatch) => {
    return _saveQuestion({
      optionOneText,
      optionTwoText,
      author,
    }).then((question) => {
      dispatch(addQuestion(question));
      dispatch(saveQuestionToUser(question));
    });
  };
}

// Save Questions Answer

function addQuestionAnswer({ authedUser, qid, answer }) {
  return {
    type: SAVE_QUESTION_ANSWER,
    authedUser,
    qid,
    answer,
  };
}

export function saveQuestionAnswer(info) {
  return (dispatch) => {
    return _saveQuestionAnswer(info).then(() => {
      dispatch(addQuestionAnswer(info));
      dispatch(addUserAnswer(info));
    });
  };
}
