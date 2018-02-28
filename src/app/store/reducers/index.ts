import * as fromScore from './score.reducer';
import * as fromAttempts from './attempts.reducer';
import * as fromUi from './ui.reducer';
import { ActionReducerMap } from '@ngrx/store';
// TODO #15: Fix the code in order to add the attempts and score state and reducers to the application
/**
 * Definition of the Application State
 */
export interface ApplicationState {
  ui: fromUi.UiState;
}

/**
 * Definition of the reducers mapped by the application
 * @type {{score: (state: ScoreState, action: ScoreAction) => ScoreState}}
 */
export const reducers: ActionReducerMap<ApplicationState> = {
  ui: fromUi.reducer,
};
