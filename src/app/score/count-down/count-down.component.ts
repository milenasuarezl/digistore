import { Component, OnInit } from '@angular/core';
import * as fromStore from '../../store';
import { Store } from '@ngrx/store';
import { StopPlaying, TimeOutGame } from '../../store/actions';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.css']
})
export class CountDownComponent implements OnInit {

  // Variables in View
  timeInSeconds = 0;
  interval;

  constructor(private store: Store<fromStore.ApplicationState>) {
  }

  ngOnInit() {
    this.store.subscribe(state => {
      if (state.ui.isPlaying) {
        this.activateCountDown();
      } else {
        this.stopCountDown();
      }
    });
  }

  private activateCountDown() {
    if (this.timeInSeconds === 0) {
      this.timeInSeconds = 10;
      this.interval = setInterval(() => {
        if (this.timeInSeconds >= 1) {
          this.timeInSeconds = this.timeInSeconds - 1;
        } else {
          this.stopCountDown();
          this.store.dispatch(new TimeOutGame());
        }
      }, 1000);
    }
  }

  private stopCountDown() {
    clearInterval(this.interval);
    this.timeInSeconds = 0;
  }

}
