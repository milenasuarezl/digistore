import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attempts-register',
  templateUrl: './attempts-register.component.html',
  styleUrls: ['./attempts-register.component.css']
})
export class AttemptsRegisterComponent implements OnInit {

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

  constructor() {
  }

  ngOnInit() {
  }

}
