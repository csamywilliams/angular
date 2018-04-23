import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as fromStore from '../../reducer/reducers';
import * as activityAction from '../../actions/activity';

@Component({
  selector: 'activity-table',
  templateUrl: './activity-table.component.html',
  styleUrls: ['./activity-table.component.css']
})
export class ActivityTableComponent implements OnInit {

  activities: Observable<any>;

  constructor(
    private store: Store<fromStore.State>
  ) {
    this.activities = store.select(fromStore.getActivities);
  }

  ngOnInit() {
  }

}

