// Action Constants
import { Action } from '@ngrx/store';

export const ADD_ATTEMPT = '[Attempt] Add new attempt';
export const RESET_ATTEMPTS = '[Attempt] Reset attempts in game';

// Action Creators
export class AddAttempt implements Action {
  readonly type = ADD_ATTEMPT;

  constructor(public payload: any) {
  }
}

export class ResetAttempts implements Action {
  readonly type = RESET_ATTEMPTS;
}

// Action Types
export type AttemptsActions = AddAttempt | ResetAttempts;
