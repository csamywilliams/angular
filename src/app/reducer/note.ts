import * as Action from '../actions/note';
import { Note } from '../../Models/note';

const STATUS = {
  NEW: 'new',
  DONE: 'done'
}

export interface State {
  total: number;
  notes: Array<Note>;
}

export const initialState: State = {
  total: 0,
  notes: []
};

export function reducer(state = initialState, action: Action.Actions): State {
  switch (action.type) {
    case Action.ADD: {
      return {
        ...state,
        total: state.total + 1,
        notes: [
          ...state.notes, action.note
        ]
      };
    }

    default: {
      return state;
    }
  }
}