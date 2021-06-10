import { _getQuestions, _saveQuestion } from '../utils/_DATA';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const RECEIVING_QUESTIONS = 'RECEIVING_QUESTIONS';
export const SAVE_QUESTION = 'SAVE_QUESTION';

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
    });
  };
}

export default function getQuestions() {
  return (dispatch) => {
    dispatch(receivingQuestions());
    return _getQuestions().then((questions) => dispatch(receiveQuestions(questions)));
  };
}
