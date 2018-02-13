import { Component, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main-board',
  templateUrl: './main-board.component.html',
  styleUrls: ['./main-board.component.css']
})
export class MainBoardComponent implements OnInit {

  @ViewChild('startGameSound') startGameSound;
  @ViewChild('gameOverSound') gameOverSound;
  @ViewChild('laserSound') laserSound;
  @ViewChild('goodSound') goodSound;

  constructor() {
  }

  ngOnInit() {
    this.startGame();
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    console.log(event);

    switch (event.keyCode) {
      case KEY_CODE.RIGHT_ARROW:
        this.sayGood();
        break;

      case KEY_CODE.LEFT_ARROW:
        this.sayGood();
        break;

      case KEY_CODE.UP_ARROW:
        this.shotLaser();
        break;

      case KEY_CODE.DOWN_ARROW:
        this.sayGameOver();
        break;
    }
  }

  private startGame() {
    this.startGameSound.nativeElement.play();
  }

  private sayGameOver() {
    this.gameOverSound.nativeElement.play();
  }

  private shotLaser() {
    this.laserSound.nativeElement.play();
  }

  private sayGood() {
    this.goodSound.nativeElement.play();
  }
}

export enum KEY_CODE {
  RIGHT_ARROW = 39,
  LEFT_ARROW = 37,
  UP_ARROW = 38,
  DOWN_ARROW = 40
}
