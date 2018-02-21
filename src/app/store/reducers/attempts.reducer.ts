import * as fromAttempts from '../actions/attempts.actions';

// Interface
export interface AttemptsState {
  attempts: any[];
}

// Initial State Definition
export const initialState: AttemptsState = {
  attempts: []
};

/**
 * Reducer to handle the attempts by the user in the game
 * @param {AttemptsState} state
 * @param {AttemptsActions} action
 * @returns {AttemptsState}
 */
export function reducer(state = initialState, action: fromAttempts.AttemptsActions): AttemptsState {
  switch (action.type) {
    case fromAttempts.ADD_ATTEMPT:
      break;

    case fromAttempts.RESET_ATTEMPTS:
      break;

    default:
      return state;
  }
}
