import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BoardModule } from './board/board.module';
import { ScoreModule } from './score/score.module';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './app.reducer';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BoardModule,
    ScoreModule,
    StoreModule.forRoot({game: appReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
