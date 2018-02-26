import * as fromAttempts from "../actions/attempts.actions";

// Interface

export interface Attempt {
  control: string,
  result: string,
  icon?: string
}
export interface AttemptsState {
  attemps: Attempt[];
}

// Initial State Definition
export const initialState: AttemptsState = {
  attemps:[]
};

/**
 * Reducer to handle the attempts by the user in the game
 * @param {AttemptsState} state
 * @param {AttemptsActions} action
 * @returns {AttemptsState}
 */
export function reducer (state = initialState, action: fromAttempts.AttemptsActions): AttemptsState {
   switch (action.type) {
    case fromAttempts.ADD_ATTEMPT:
      /* return {
        attemps: state.attemps.push({});
      } */
      return state;
      break;
    case fromAttempts.RESET_ATTEMPTS:
      return {
        attemps:[]
      };
    default:
      return state;
  }
}
