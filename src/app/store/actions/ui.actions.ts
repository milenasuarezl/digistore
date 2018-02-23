import { Action } from '@ngrx/store';

// Action Constants
export const START_PLAYING = '[UI] Start Playing';
export const STOP_PLAYING = '[UI] Stop Playing';
export const TIME_OUT_GAME = '[UI] Time Out Game Over';

// Action Creators
export class StartPlaying implements Action {
  readonly type = START_PLAYING;
}

export class StopPlaying implements Action {
  readonly type = STOP_PLAYING;
}

export class TimeOutGame implements  Action {
  readonly  type = TIME_OUT_GAME;
}
// Action Types
export type UiActions = StartPlaying | StopPlaying | TimeOutGame;
