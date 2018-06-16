import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';

// actions
const ADD_POST = 'editor/ADD_POST';

// action creators
export const addPost = createAction(ADD_POST);

const initialState = Map({

});

// reducer
export default handleActions({
  [ADD_POST]: (state, action) => {
    return state
  }
}, initialState);

