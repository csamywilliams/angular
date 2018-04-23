import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { Activity } from '../../../Models/activity';

import { ACTIVITY_DATA } from '../../../mock-data/mock-activity';

import { Store } from '@ngrx/store';
import * as fromStore from '../../reducer/reducers';
import * as activityAction from '../../actions/activity';

@Component({
  selector: 'activity-table',
  templateUrl: './activity-table.component.html',
  styleUrls: ['./activity-table.component.css']
})
export class ActivityTableComponent implements OnInit {

  activitiesObservable: Observable<any>;

  activities: Observable<any>;

  constructor(
    private store: Store<fromStore.State>
  ) {
    this.activities = store.select(fromStore.getActivities);
  }

  ngOnInit() {
  }

  getActivities(): Observable<any>{
    return Observable.of(this.activitiesObservable);
  }

}

