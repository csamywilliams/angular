import * as Action from '../actions/note';
import { Note } from '../../Models/note';

import { MOCK_NOTES } from '../../mock-data/mock-notes';

export interface State {
  total: number;
  notes: Array<Note>;
}

export const initialState: State = {
  total: MOCK_NOTES.length,
  notes: MOCK_NOTES
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