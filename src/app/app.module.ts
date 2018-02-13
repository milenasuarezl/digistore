import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BoardModule } from './board/board.module';
import { ScoreModule } from './score/score.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BoardModule,
    ScoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
