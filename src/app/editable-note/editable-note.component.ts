import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgModel } from '@angular/forms';

import { Store } from '@ngrx/store';
import * as fromStore from '../reducer/reducers';
import * as noteAction from '../actions/note';

import { Note } from '../../Models/note';
import { AUTHOR } from '../../mock-data/mock-notes';

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

  submitNote(form: NgForm) { 

    const subject = form.value.subject;
    const message = form.value.message;
    const important = form.value.important;

    var note = new Note();
    note.subject = subject;
    note.message = message;
    note.author = AUTHOR;
    note.tag = important;
    note.date = Date.now();

    this.store.dispatch(new noteAction.AddNote(note));
  }

}
