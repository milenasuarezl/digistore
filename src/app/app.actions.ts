import { Action } from '@ngrx/store';

export const START_PLAYING = 'START_PLAYING';
export const STOP_PLAYING = 'STOP_PLAYING';
export const ADD_SCORE = 'ADD_SCORE';
export const ADD_ATTEMPT = 'ADD_ATTEMPT';

export class StartPlaying implements Action {
  readonly type = START_PLAYING;
}

export class StopPlaying implements Action {
  readonly type = STOP_PLAYING;
}

export class AddScore implements Action {
  readonly type = ADD_SCORE;
}

export class AddAttempt implements Action {
  readonly type = ADD_ATTEMPT;
}

export type GameActions = StartPlaying | StopPlaying | AddScore | AddAttempt;
