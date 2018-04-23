import * as Action from '../actions/activity';
import { Activity } from '../../Models/activity';

import { ACTIVITY_DATA } from '../../mock-data/mock-activity';

export interface State {
  total: number;
  notes: Array<Activity>;
}

export const initialState: State = {
  total: 0,
  notes: ACTIVITY_DATA
};

export function reducer(state = initialState, action: Action.Actions): State {
  switch (action.type) {
    case Action.ADD: {
      return {
        ...state,
        total: state.total + 1,
        notes: [
          ...state.notes, action.activity
        ]
      };
    }

    default: {
      return state;
    }
  }
}