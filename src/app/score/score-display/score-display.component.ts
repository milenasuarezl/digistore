import { Component, OnInit } from '@angular/core';
import * as fromStore from '../../store';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-score-display',
  templateUrl: './score-display.component.html',
  styleUrls: ['./score-display.component.css']
})
export class ScoreDisplayComponent implements OnInit {

  score$: Observable<number>;

  constructor(private store: Store<fromStore.ApplicationState>) {
  }

  ngOnInit() {
    this.score$ = this.store
      .pipe(map(state => state.score.scoreValue));
  }

}
