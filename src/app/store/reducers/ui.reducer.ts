import { START_PLAYING, STOP_PLAYING, UiActions } from '../actions/ui.actions';
import { TIME_OUT_GAME } from '../actions';

export interface UiState {
  isPlaying: boolean;
  timeOutGame: boolean;
}

export const initialState: UiState = {
  isPlaying: false,
  timeOutGame: false,
};

/**
 * Reducer to handle the UI states in the application
 * @param {UiState} state
 * @param {UiActions} action
 * @returns {any}
 */
export function reducer(state = initialState, action: UiActions): UiState {
  switch (action.type) {
    case START_PLAYING:
      return {
        isPlaying: true,
        timeOutGame: false
      };
    case STOP_PLAYING:
      return {
        isPlaying: false,
        timeOutGame: false
      };
    case TIME_OUT_GAME:
      return {
        ...state,
        timeOutGame: true
      };
    default:
      return state;
  }
}


// Selectors
const getIsPlaying = (state: UiState) => state.isPlaying;
