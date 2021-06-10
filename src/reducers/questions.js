import { RECEIVE_QUESTIONS, RECEIVING_QUESTIONS, SAVE_QUESTION } from '../actions/questions';

const initialState = {
  isLoading: false,
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
    default:
      return state;
  }
}
