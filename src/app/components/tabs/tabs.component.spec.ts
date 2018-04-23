import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsComponent } from './tabs.component';
import { NotesViewComponent } from '../notes-view/notes-view.component';
import { MatTab, MatTabGroup, MatCardContent, MatCard, MatTabHeader, MatTabBody } from '@angular/material';
import { ActivityTableComponent } from '../activity-table/activity-table.component';
import { EditableNoteComponent } from '../editable-note/editable-note.component';
import { ReversePipe } from '../../pipes/reverse.pipe';
import { NoteComponent } from '../note/note.component';

describe('TabsComponent', () => {
  let component: TabsComponent;
  let fixture: ComponentFixture<TabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsComponent, NotesViewComponent, 
        MatTab, ActivityTableComponent, MatTabGroup, MatCardContent, 
        MatCard, EditableNoteComponent, ReversePipe, NotesViewComponent, NoteComponent,
        MatTabHeader, MatTabBody ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
