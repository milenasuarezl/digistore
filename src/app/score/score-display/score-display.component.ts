import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-score-display',
  templateUrl: './score-display.component.html',
  styleUrls: ['./score-display.component.css']
})
export class ScoreDisplayComponent implements OnInit {

  score: number;

  constructor() {
  }

  ngOnInit() {
    this.score = 0;

    setInterval(() => {
      this.score += 35;
    }, 300);
  }

}
