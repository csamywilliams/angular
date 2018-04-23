import { Component, OnInit } from '@angular/core';

import { CaseDetails } from '../../../Models/case-details';

@Component({
  selector: 'case-details',
  templateUrl: './case-details.component.html',
  styleUrls: ['./case-details.component.css']
})
export class CaseDetailsComponent implements OnInit {

  case: CaseDetails = {
    id: 1,
    ref: 123456789,
    type: "personal loans"
  };


  constructor() { }

  ngOnInit() {
  }

}
