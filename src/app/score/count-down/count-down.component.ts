import { Component, OnInit } from '@angular/core';
import * as fromStore from '../../store';
import { Store } from '@ngrx/store';
import { TimeOutGame } from '../../store/actions';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.css']
})
export class CountDownComponent implements OnInit {

  // Variables in View
  timeInSeconds = 0;
  interval;
  runningCountDown: boolean;
  // Constants
  // TODO #14: Update the count down to 10 seconds
  TIME_COUNT_DOWN = 3;

  constructor(private store: Store<fromStore.ApplicationState>) {
  }

  ngOnInit() {
    this.store.subscribe(state => {
      if (state.ui.isPlaying && !this.runningCountDown) {
        this.activateCountDown();
      }
    });
  }

  private activateCountDown() {
    console.log('Activating countdown');
    this.runningCountDown = true;
    this.timeInSeconds = this.TIME_COUNT_DOWN;
    this.interval = setInterval(() => {
      if (this.timeInSeconds >= 1) {
        this.timeInSeconds = this.timeInSeconds - 1;
      } else {
        this.store.dispatch(new TimeOutGame());
        this.stopCountDown();
      }
    }, 1000);
  }

  private stopCountDown() {
    clearInterval(this.interval);
    this.interval = null;
    this.timeInSeconds = 0;
    this.runningCountDown = false;
  }

}
