import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoreDisplayComponent } from './score-display/score-display.component';
import { AttemptsRegisterComponent } from './attempts-register/attempts-register.component';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature('score', {})
  ],
  declarations: [ScoreDisplayComponent, AttemptsRegisterComponent],
  exports: [ScoreDisplayComponent, AttemptsRegisterComponent]
})
export class ScoreModule {
}
