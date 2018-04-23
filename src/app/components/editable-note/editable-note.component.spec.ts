import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditableNoteComponent } from './editable-note.component';
import { ReversePipe } from '../../pipes/reverse.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../../reducer/reducers';

describe('EditableNoteComponent', () => {
  let component: EditableNoteComponent;
  let fixture: ComponentFixture<EditableNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditableNoteComponent, ReversePipe ],
      imports: [FormsModule, ReactiveFormsModule, StoreModule.forRoot(reducers, {})]
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
