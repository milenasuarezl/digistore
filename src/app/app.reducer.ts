import { ADD_ATTEMPT, ADD_SCORE, GameActions, START_PLAYING, STOP_PLAYING } from './app.actions';

export interface State {
  isPlaying: boolean;
  score: number;
  attempts: Array<{
    controlShown: string;
    controlPressed: string;
    result: string;
    icon: string;
  }>;
}

export interface ScoreState {
  score: number;
}

export const initialState: State = {
  isPlaying: false,
  score: 0,
  attempts: []
};

export function appReducer(state = initialState, action: GameActions) {
  switch (action.type) {
    case START_PLAYING:
      return {
        ...state,
        isPlaying: true
      };
    case STOP_PLAYING:
      return {
        ...state,
        isPlaying: false
      };
    case ADD_SCORE:
      return {
        ...state,
        score: state.score + 10
      };
    case ADD_ATTEMPT:
      return {
        ...state,
        attempts: state.attempts.push({
          controlShown: 'UP',
          controlPressed: 'UP',
          result: 'OK',
          icon: 'arrow_upward'
        })
      };
    default:
      return state;
  }
}


// Selectors
const getIsPlaying = (state: State) => state.isPlaying;
