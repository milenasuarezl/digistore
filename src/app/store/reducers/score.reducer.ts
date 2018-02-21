import * as fromScore from '../actions/score.actions';

// Interface
export interface ScoreState {
  score: number;
}

// Initial state definition
export const initialState: ScoreState = {
  score: 0
};

/**
 * Reducer to handle the score in the game
 * @param {ScoreState} state
 * @param {ScoreActions} action
 * @returns {ScoreState}
 */
export function reducer(state = initialState, action: fromScore.ScoreActions): ScoreState {
  switch (action.type) {
    case fromScore.ADD_SCORE:
      return {
        score: state.score + action.payload
      };

    case fromScore.RESET_SCORE:
      return {
        score: 0
      };

    default:
      return state;
  }
}
