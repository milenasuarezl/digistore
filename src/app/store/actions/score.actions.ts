// Action Constants
// TODO #4 Add actions here
import { Action } from '@ngrx/store';

export const RESET_SCORE = '[Score] Setting the score to 0';

// Action Creators
// TODO #5 Implement action creators here
export class ResetScore implements Action {
  readonly type = RESET_SCORE;
}

// Action Types
// TODO #6 Implement action types here. Do not forget export your things.
export type ScoreActions = ResetScore;
