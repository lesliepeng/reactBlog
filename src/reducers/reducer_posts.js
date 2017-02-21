import { FETCH_POSTS, FETCH_POST } from '../actions/index';

const INITIAL_STATE = { all: [], post: null };

export default function(state = INITIAL_STATE, action) {
  console.log("reducer");
  console.log(action.payload);
  switch (action.type) {
    case FETCH_POST:
      return {...state, post: action.payload.data };
    case FETCH_POSTS:
      return { ...state, all: action.payload.data.results };

    default:
      return state;

  }
}
