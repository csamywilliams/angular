import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromNote from './note';
import * as fromActivity from './activity';
import { StoreModule } from '@ngrx/store';

export interface State {
  note: fromNote.State;
  activity: fromActivity.State;
}

export const reducers = {
  note: fromNote.reducer,
  activity: fromActivity.reducer
};

export const getAppNote = (state: State) => state.note;

export const getAppActivity = (state: State) => state.activity;

export const getNotes = createSelector(
  getAppNote,
  (state: fromNote.State) => {
    return state.notes;
  }
);

export const getTotalNote = createSelector(
  getAppNote,
  (state: fromNote.State) => {
    return state.total;
  }
);

export const getActivities = createSelector(
  getAppActivity,
  (state: fromActivity.State) => {
    return state.notes;
  }
);