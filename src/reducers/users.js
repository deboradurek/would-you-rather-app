import { ADD_USER_ANSWER, RECEIVE_USERS, SAVE_QUESTION_TO_USER } from '../actions/users';

export default function users(state = null, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };

    case SAVE_QUESTION_TO_USER:
      const { question } = action;
      return {
        ...state,
        [question.author]: {
          ...state[question.author],
          questions: [...state[question.author].questions, question.id],
        },
      };

    case ADD_USER_ANSWER:
      const { authedUser, qid, answer } = action;
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [qid]: answer,
          },
        },
      };

    default:
      return state;
  }
}
