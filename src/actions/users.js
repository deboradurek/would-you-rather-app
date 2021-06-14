import { _getUsers } from '../utils/_DATA';

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const SAVE_QUESTION_TO_USER = 'SAVE_QUESTION_TO_USER';
export const ADD_USER_ANSWER = 'ADD_USER_ANSWER';

// Receive Users

function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}

export default function getUsers() {
  return (dispatch) => {
    return _getUsers().then((users) => dispatch(receiveUsers(users)));
  };
}

// Save newly created question to user

export function saveQuestionToUser(question) {
  return {
    type: SAVE_QUESTION_TO_USER,
    question,
  };
}

// Save User Answer

export function addUserAnswer({ authedUser, qid, answer }) {
  return {
    type: ADD_USER_ANSWER,
    authedUser,
    qid,
    answer,
  };
}
