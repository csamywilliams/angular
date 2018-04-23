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
import { CaseDetailsComponent } from './components/case-details/case-details.component';
import { StepTrackerComponent } from './components/step-tracker/step-tracker.component';
import { CaseDetailsInfoComponent } from './components/case-details-info/case-details-info.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { NotesViewComponent } from './components/notes-view/notes-view.component';
import { NoteComponent } from './components/note/note.component';
import { EditableNoteComponent } from './components/editable-note/editable-note.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { reducers } from './reducer/reducers';
import { ActivityTableComponent } from './components/activity-table/activity-table.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

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
    ReversePipe,
    NavBarComponent
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
    StoreModule.forRoot(reducers, {}),
     StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production // Restrict extension to log-only mode
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
