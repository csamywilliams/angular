import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CaseDetailsComponent } from './components/case-details/case-details.component';
import { StepTrackerComponent } from './components/step-tracker/step-tracker.component';
import { CaseDetailsInfoComponent } from './components/case-details-info/case-details-info.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { NotesViewComponent } from './components/notes-view/notes-view.component';
import { MatTab, MatTabGroup, MatCardContent, MatCard, MatTabHeader, MatTabBody, MatTabsModule, MatCardModule, MatIconModule, MatTableModule, MatInputModule, MatFormFieldModule } from '@angular/material';
import { ActivityTableComponent } from './components/activity-table/activity-table.component';
import { EditableNoteComponent } from './components/editable-note/editable-note.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { Activity } from '../Models/activity';
import { NoteComponent } from './components/note/note.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { reducers } from './reducer/reducers';
import { StoreModule } from '@ngrx/store';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, NavBarComponent, CaseDetailsComponent, StepTrackerComponent, 
        CaseDetailsInfoComponent, TabsComponent, NotesViewComponent, ReversePipe,
        ActivityTableComponent, EditableNoteComponent, NoteComponent
      ],
      imports: [
        FormsModule,  
        BrowserModule,    
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MatTabsModule,
        MatCardModule,
        MatIconModule,
        MatTableModule,
        MatInputModule,
        MatFormFieldModule,
        StoreModule.forRoot(reducers, {})
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('CALL CASES:');
  }));
});
