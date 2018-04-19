import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import * as fromStore from '../reducer/reducers';
import * as noteAction from '../actions/note';

import { Note } from '../../Models/note';

@Component({
  selector: 'editable-note',
  templateUrl: './editable-note.component.html',
  styleUrls: ['./editable-note.component.css']
})
export class EditableNoteComponent implements OnInit {

  constructor(
    private store: Store<fromStore.State>
  ) {

  }

  ngOnInit() {
  }

  submitNote() { 

    var note = new Note();
    note.subject = "hello";
    note.message = "how are you?";

    this.store.dispatch(new noteAction.AddNote(note));
  }

}
