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

  attempts$: Observable<any>;
  totalAttemps: number;

  constructor(private store: Store<fromStore.ApplicationState>) {
  }

  ngOnInit() {
    this.attempts$ = this.store
      .pipe(map((state, total) => state.attempts.attempts));
  }
}
