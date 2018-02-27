import { Component, OnInit, ViewChild } from '@angular/core';
import * as fromStore from '../../store';
import { Store } from '@ngrx/store';
import { Attempt } from '../../store/reducers/attempts.reducer';

@Component({
  selector: 'app-attempts-register',
  templateUrl: './attempts-register.component.html',
  styleUrls: ['./attempts-register.component.css']
})
export class AttemptsRegisterComponent implements OnInit {

  attempts: Attempt[];
  unMatchAttempts: number;
  matchAttempts: number;

  @ViewChild('attemptScroll') attemptScroll;

  constructor(private store: Store<fromStore.ApplicationState>) {
  }

  ngOnInit() {
    this.store.subscribe((state) => {
      this.attempts = state.attempts.attempts;
      this.matchAttempts = state.attempts.attempts.filter((attempt) => attempt.isSuccess).length;
      this.unMatchAttempts = state.attempts.attempts.filter((attempt) => !attempt.isSuccess).length;
      this.attemptScroll.nativeElement.scrollLeft = 5000;
    });
  }
}
