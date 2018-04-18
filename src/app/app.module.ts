import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';

import { AppComponent } from './app.component';
import { CaseDetailsComponent } from './case-details/case-details.component';
import { StepTrackerComponent } from './step-tracker/step-tracker.component';
import { CaseDetailsInfoComponent } from './case-details-info/case-details-info.component';
import { TabsComponent } from './tabs/tabs.component';
import { NotesViewComponent } from './notes-view/notes-view.component';
import { NoteComponent } from './note/note.component';
import { EditableNoteComponent } from './editable-note/editable-note.component';


@NgModule({
  declarations: [
    AppComponent,
    CaseDetailsComponent,
    StepTrackerComponent,
    CaseDetailsInfoComponent,
    TabsComponent,
    NotesViewComponent,
    NoteComponent,
    EditableNoteComponent
  ],
  imports: [
    BrowserModule,    
    BrowserAnimationsModule,
    MatTabsModule,
    MatCardModule,
    MatIconModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
