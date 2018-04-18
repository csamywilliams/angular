import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'editable-note',
  templateUrl: './editable-note.component.html',
  styleUrls: ['./editable-note.component.css']
})
export class EditableNoteComponent implements OnInit {

  constructor() { }

  submitted = false;

  ngOnInit() {
  }

  onSubmit() { 
    this.submitted = true; 
  }

}
