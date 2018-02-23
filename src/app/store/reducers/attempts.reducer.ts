import * as fromAttempts from '../actions/attempts.actions';

// Interface
export interface AttemptsState {
  successfull?: number;
  failures?: number;
}

// Initial State Definition
export const initialState: AttemptsState = {
  successfull: 0,
  failures: 0
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
      if (action.payload) {
        return {
          successfull: state.successfull++,
        };
      } else {
        return {
          failures: state.failures++,
        };
      }
    case fromAttempts.RESET_ATTEMPTS:
      return {
        successfull: 0,
        failures: 0
      };
    default:
      return state;
  }
}
