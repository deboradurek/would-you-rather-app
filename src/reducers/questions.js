import {
  RECEIVE_QUESTIONS,
  RECEIVING_QUESTIONS,
  SAVE_QUESTION,
  SAVE_QUESTION_ANSWER,
} from '../actions/questions';

const initialState = {
  isLoading: true,
  questions: {},
};

export default function questions(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        isLoading: false,
        questions: action.questions,
      };

    case RECEIVING_QUESTIONS:
      return {
        ...state,
        isLoading: true,
      };

    case SAVE_QUESTION:
      const { question } = action;
      return {
        ...state,
        questions: {
          ...state.questions,
          [question.id]: question,
        },
      };

    case SAVE_QUESTION_ANSWER:
      const { authedUser, qid, answer } = action;

      return {
        ...state,
        questions: {
          ...state.questions,
          [qid]: {
            ...state.questions[qid],
            [answer]: {
              ...state.questions[qid][answer],
              votes: [...state.questions[qid][answer].votes, authedUser],
            },
          },
        },
      };

    default:
      return state;
  }
}
