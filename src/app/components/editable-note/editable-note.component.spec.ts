import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditableNoteComponent } from './editable-note.component';

describe('EditableNoteComponent', () => {
  let component: EditableNoteComponent;
  let fixture: ComponentFixture<EditableNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditableNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditableNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
