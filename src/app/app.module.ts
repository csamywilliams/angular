import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';

import { AppComponent } from './app.component';
import { CaseDetailsComponent } from './case-details/case-details.component';
import { StepTrackerComponent } from './step-tracker/step-tracker.component';
import { CaseDetailsInfoComponent } from './case-details-info/case-details-info.component';
import { TabsComponent } from './tabs/tabs.component';
import { NotesViewComponent } from './notes-view/notes-view.component';
import { NoteComponent } from './note/note.component';
import { EditableNoteComponent } from './editable-note/editable-note.component';

import { ReversePipe } from './reverse.pipe';
import { reducers } from './reducer/reducers';
import { ActivityTableComponent } from './activity-table/activity-table.component';

@NgModule({
  declarations: [
    AppComponent,
    CaseDetailsComponent,
    StepTrackerComponent,
    CaseDetailsInfoComponent,
    TabsComponent,
    NotesViewComponent,
    NoteComponent,
    EditableNoteComponent,
    ActivityTableComponent,
    ReversePipe
  ],
  imports: [
    BrowserModule,    
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatCardModule,
    MatIconModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    StoreModule.forRoot(reducers, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
