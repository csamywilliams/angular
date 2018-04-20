import { Action } from '@ngrx/store';

import { Activity } from '../../Models/activity';

export const ADD = 'ADD ACTIVITY';

export class AddActivity implements Action {
  readonly type = ADD;

  constructor(public activity: Activity) {}
}

export type Actions =
  | AddActivity;