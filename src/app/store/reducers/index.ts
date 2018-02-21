import * as fromScore from './score.reducer';
import * as fromAttempts from './attempts.reducer';
import * as fromUi from './ui.reducer';
import { ActionReducerMap } from '@ngrx/store';

/**
 * Definition of the Application State
 */
export interface ApplicationState {
  score: fromScore.ScoreState;
  attempts: fromAttempts.AttemptsState;
  ui: fromUi.UiState;
}

/**
 * Definition of the reducers mapped by the application
 * @type {{score: (state: ScoreState, action: ScoreAction) => ScoreState}}
 */
export const reducers: ActionReducerMap<ApplicationState> = {
  score: fromScore.reducer,
  attempts: fromAttempts.reducer,
  ui: fromUi.reducer,
};
