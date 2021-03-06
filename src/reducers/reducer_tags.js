import { FETCH_TAGS } from '../actions/index';

const INITIAL_STATE = { all: [], tag: null };

export default function(state = INITIAL_STATE, action) {
  
  switch (action.type) {
    case FETCH_TAGS:
      return { ...state, all: action.payload.data.result };

    default:
      return state;

  }
}
