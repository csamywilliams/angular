import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromNote from './note';
import { StoreModule } from '@ngrx/store';

export interface State {
  todo: fromNote.State;
}

export const reducers = {
  todo: fromNote.reducer
};

export const getAppNote = (state: State) => state.todo;

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