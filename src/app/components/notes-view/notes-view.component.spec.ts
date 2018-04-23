import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesViewComponent } from './notes-view.component';
import { EditableNoteComponent } from '../editable-note/editable-note.component';
import { reverse } from 'dns';
import { ReversePipe } from '../../pipes/reverse.pipe';
import { NoteComponent } from '../note/note.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../../reducer/reducers';

describe('NotesViewComponent', () => {
  let component: NotesViewComponent;
  let fixture: ComponentFixture<NotesViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotesViewComponent, EditableNoteComponent, ReversePipe, NoteComponent ],
      imports: [ FormsModule, ReactiveFormsModule, StoreModule.forRoot(reducers, {})]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
