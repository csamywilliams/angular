import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as fromStore from '../../reducer/reducers';
import { Note } from '../../../Models/note';

@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  total: Observable<any>;

  notes: Note[];

  constructor(
    private store: Store<fromStore.State>
  ) {
    this.total = store.select(fromStore.getTotalNotes);
  }

  ngOnInit() {
  
  }

}
