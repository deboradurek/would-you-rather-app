import { ADD_USER_ANSWER, RECEIVE_USERS } from '../actions/users';

export default function users(state = null, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    case ADD_USER_ANSWER:
      const { authedUser, qid, answer } = action;
      console.log(state.users, state, authedUser);
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
