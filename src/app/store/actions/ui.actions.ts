import { Action } from '@ngrx/store';

// Action Constants
export const START_PLAYING = '[UI] Start Playing';
export const STOP_PLAYING = '[UI] Stop Playing';

// Action Creators
export class StartPlaying implements Action {
  readonly type = START_PLAYING;
}

export class StopPlaying implements Action {
  readonly type = STOP_PLAYING;
}

// Action Types
export type UiActions = StartPlaying | StopPlaying;
