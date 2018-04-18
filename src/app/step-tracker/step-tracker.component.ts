import { Component, OnInit } from '@angular/core';

import { STEPS } from '../../mock-data/mock-steps';

@Component({
  selector: 'step-tracker',
  templateUrl: './step-tracker.component.html',
  styleUrls: ['./step-tracker.component.css']
})

export class StepTrackerComponent implements OnInit {

  steps = STEPS;

  constructor() { }

  ngOnInit() {
  }

}
