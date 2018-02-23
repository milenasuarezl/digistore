import { Component, OnInit } from '@angular/core';
import * as fromStore from '../../store';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-attempts-register',
  templateUrl: './attempts-register.component.html',
  styleUrls: ['./attempts-register.component.css']
})
export class AttemptsRegisterComponent implements OnInit {

  attempSuccessfull$: Observable<number>;
  attempFailure$: Observable<number>;

  attempts = [{
    control: 'UP',
    result: 'OK',
    icon: 'arrow_upward'
  }, {
    control: 'RIGHT',
    result: 'OK',
    icon: 'arrow_forward'
  }, {
    control: 'DOWN',
    result: 'WRONG',
    icon: 'arrow_downward'
  }, {
    control: 'LEFT',
    result: 'OK',
    icon: 'arrow_back'
  }, {
    control: 'UP',
    result: 'OK',
    icon: 'arrow_upward'
  }];

  constructor(private store: Store<fromStore.ApplicationState>) {
  }

  ngOnInit() {
    this.attempSuccessfull$ = this.store
    .pipe(map(state => state.attempts.successfull));
    this.attempFailure$ = this.store
    .pipe(map(state => state.attempts.failures));
  }
}
