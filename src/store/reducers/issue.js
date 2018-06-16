import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';

// actions
const SET_ISSUE = 'issue/SET_ISSUE';

// action creators
export const setIssue = createAction(SET_ISSUE);

const initialState = Map({
  data: false
});

// reducer
export default handleActions({
  [SET_ISSUE]: (state, action) =>
    state.set('data', action.payload)
}, initialState);

