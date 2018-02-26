import { Attempt } from './../../store/reducers/attempts.reducer';
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

  attemps$: Observable<any>;
  attempt: Attempt[];

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
  }];

  constructor(private store: Store<fromStore.ApplicationState>) {
  }

  ngOnInit() {
    this.attemps$ = this.store
      .pipe(map(state => this.attempt = state.attempts.attemps));
  }
}
