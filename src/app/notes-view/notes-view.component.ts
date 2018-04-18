import { Component, OnInit } from '@angular/core';

import { Note } from '../../Models/note';

import { NOTES } from '../../mock-data/mock-notes';

@Component({
  selector: 'notes-view',
  templateUrl: './notes-view.component.html',
  styleUrls: ['./notes-view.component.css']
})

export class NotesViewComponent implements OnInit {

  constructor() { }

  notes = NOTES;

  ngOnInit() {
  }

  addNote() {
    //create a new note.

    //this.notes.push(n);
  }

}
