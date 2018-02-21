import { Action } from '@ngrx/store';

// Action Constants
export const ADD_SCORE = '[Score] Add Score';
export const RESET_SCORE = '[Score] Reset score to 0';

// Action Creators
export class AddScore implements Action {
  readonly type = ADD_SCORE;

  constructor(public payload: any) {
  }
}

export class ResetScore implements Action {
  readonly type = RESET_SCORE;
}

// Action Types
export type ScoreActions = AddScore | ResetScore;
