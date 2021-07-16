import { SAVE_TRIVIA } from '../actions';

const INITIAL_STATE = { idTrivia: 0, questions: [] };

function trivia(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SAVE_TRIVIA:
    return ({
      ...state,
      questions: [...action.payload],
    });
  default:
    return state;
  }
}

export default trivia;
