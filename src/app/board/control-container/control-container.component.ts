import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import * as fromStore from '../../store';
import { StartPlaying, StopPlaying } from '../../store/actions';

@Component({
  selector: 'app-control-container',
  templateUrl: './control-container.component.html',
  styleUrls: ['./control-container.component.css']
})
export class ControlContainerComponent implements OnInit {

  // Sounds
  @ViewChild('startGameSound') startGameSound;
  @ViewChild('gameOverSound') gameOverSound;
  @ViewChild('laserSound') laserSound;
  @ViewChild('goodSound') goodSound;

  // Controls
  @ViewChild('upArrow') upArrow;
  @ViewChild('leftArrow') leftArrow;
  @ViewChild('rightArrow') rightArrow;
  @ViewChild('downArrow') downArrow;
  // Variables in View
  isPlaying$: Observable<boolean>;
  interval;

  // Constants
  private readonly TIME_DELAY_PRESS = 200;
  private readonly TIME_DELAY_COLOR = 400;
  private readonly TIME_UPDATE_COLOR = 1000;
  private readonly TIME_TO_START_GAME = 3000;

  constructor(private store: Store<fromStore.ApplicationState>) {
  }

  ngOnInit() {
    this.isPlaying$ = this.store.pipe(map(state => state.ui.isPlaying));
  }

  public onStartGame(): void {
    this.startGame();
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    console.log(event);

    switch (event.keyCode) {
      case KEY_CODE.RIGHT_ARROW:
        this.sayGood();
        this.pressButtonEffect(this.rightArrow, 'pressed', this.TIME_DELAY_PRESS);
        break;

      case KEY_CODE.LEFT_ARROW:
        this.pressButtonEffect(this.leftArrow, 'pressed', this.TIME_DELAY_PRESS);
        break;

      case KEY_CODE.UP_ARROW:
        this.shotLaser();
        this.pressButtonEffect(this.upArrow, 'pressed', this.TIME_DELAY_PRESS);
        break;

      case KEY_CODE.DOWN_ARROW:
        this.sayGameOver();
        this.pressButtonEffect(this.downArrow, 'pressed', this.TIME_DELAY_PRESS);
        break;
    }
  }

  public onStopGame() {
    this.store.dispatch(new StopPlaying());
    clearInterval(this.interval);
  }

  private startGame() {
    this.store.dispatch(new StartPlaying());
    this.startGameSound.nativeElement.play();
    setTimeout(() => this.generateRandomControl(), this.TIME_TO_START_GAME);
  }

  private generateRandomControl() {
    const controls = [this.upArrow, this.leftArrow, this.rightArrow, this.downArrow];

    this.interval = setInterval(() => {
      this.sayGood();
      const indexRandom = Math.round(Math.random() * (controls.length - 1));
      const control = controls[indexRandom];
      this.pressButtonEffect(control, 'active', this.TIME_DELAY_COLOR);
    }, this.TIME_UPDATE_COLOR);
  }


  private pressButtonEffect(button: ElementRef, colorClassName: string, timeDelay: number) {
    const dom = button.nativeElement.querySelector('button');
    dom.click();
    dom.classList.add(colorClassName);

    setTimeout(() => {
      dom.classList.remove(colorClassName);
    }, timeDelay);
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
