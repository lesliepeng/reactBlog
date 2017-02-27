const INITIAL_STATE = { showSidebar: false };

export default function(state = INITIAL_STATE, action) {
  console.log(action.payload);
  switch (action.type) {
    case 'TOGGLE_NAV':
      return {...state, showSidebar: !state.showSidebar };

    default:
      return state;

  }
}
