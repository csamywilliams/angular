import { Action } from '@ngrx/store';

import { Note } from '../../Models/note';

export const ADD = 'ADD NOTE';

export class AddNote implements Action {
  readonly type = ADD;

  constructor(public note: Note) {}
}

export type Actions =
  | AddNote;