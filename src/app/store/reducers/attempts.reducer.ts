import * as fromAttempts from '../actions/attempts.actions';

// Interface

export interface Attempt {
  control: string;
  isSuccess: boolean;
  icon?: string;
}
export interface AttemptsState {
  attempts: Attempt[];
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
      state.attempts.push({
        control: action.payload.control,
        isSuccess: action.payload.isSuccess,
        icon: action.payload.icon
      });
      return {
        attempts: state.attempts
      };
    case fromAttempts.RESET_ATTEMPTS:
      return {
        attempts: []
      };
    default:
      return state;
  }
}
