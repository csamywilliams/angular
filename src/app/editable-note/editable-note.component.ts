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

  submitNote() { 
    this.submitted = true;
    alert("in here") ;
  }

}
