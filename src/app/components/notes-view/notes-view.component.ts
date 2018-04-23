import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Note } from '../../../Models/note';
import { Store } from '@ngrx/store';
import * as fromStore from '../../reducer/reducers';

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

  ngOnInit() {

  }

}
