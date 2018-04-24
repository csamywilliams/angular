import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TabsComponent } from './tabs.component';
import { NotesViewComponent } from '../notes-view/notes-view.component';
import { MatTab, MatTabGroup, MatCardContent, MatCard, MatTabHeader, MatTabBody, MatTabsModule } from '@angular/material';
import { ActivityTableComponent } from '../activity-table/activity-table.component';
import { EditableNoteComponent } from '../editable-note/editable-note.component';
import { ReversePipe } from '../../pipes/reverse.pipe';
import { NoteComponent } from '../note/note.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../../reducer/reducers';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('TabsComponent', () => {
  let component: TabsComponent;
  let fixture: ComponentFixture<TabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsComponent, NotesViewComponent, 
        ActivityTableComponent, EditableNoteComponent, 
        ReversePipe, NotesViewComponent, NoteComponent, MatCardContent, MatCard
        ],
      imports: [MatTabsModule, FormsModule, 
        StoreModule.forRoot(reducers, {}),
        BrowserAnimationsModule,
      ]
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
