import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';

import { Note } from '../../Models/note';

import { NOTES } from '../../mock-data/mock-notes';

import { Store } from '@ngrx/store';
import * as fromStore from '../reducer/reducers';
import * as todoAction from '../actions/note';

@Component({
  selector: 'notes-view',
  templateUrl: './notes-view.component.html',
  styleUrls: ['./notes-view.component.css']
})

export class NotesViewComponent implements OnInit {

  notes: Observable<any>;

  constructor(
    private store: Store<fromStore.State>
  ) {
    this.notes = store.select(fromStore.getNotes);
  }

  showHide = false;

  ngOnInit() {

    this.notes.subscribe((todos) => {
      // subscribe a todos
    })
  }

}
