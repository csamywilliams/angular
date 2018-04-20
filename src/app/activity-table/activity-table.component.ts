import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

import { Activity } from '../../Models/activity';

import { ACTIVITY_DATA } from '../../mock-data/mock-activity';

@Component({
  selector: 'activity-table',
  templateUrl: './activity-table.component.html',
  styleUrls: ['./activity-table.component.css']
})
export class ActivityTableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  displayedColumns = ['datetime', 'event', 'details'];
  dataSource = new MatTableDataSource(ACTIVITY_DATA.reverse());

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

}
