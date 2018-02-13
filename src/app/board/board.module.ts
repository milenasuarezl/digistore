import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlContainerComponent } from './control-container/control-container.component';
import { ControlButtonComponent } from './control-button/control-button.component';
import { MainBoardComponent } from './main-board/main-board.component';
import { ScoreModule } from '../score/score.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ScoreModule,
    SharedModule
  ],
  declarations: [ControlContainerComponent, ControlButtonComponent, MainBoardComponent],
  exports: [MainBoardComponent]
})
export class BoardModule {
}
