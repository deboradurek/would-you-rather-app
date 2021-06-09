import { _getQuestions } from '../utils/_DATA';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const RECEIVING_QUESTIONS = 'RECEIVING_QUESTIONS';

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
