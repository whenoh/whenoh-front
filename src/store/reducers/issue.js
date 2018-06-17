import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';

// actions
const SET_ISSUE = 'issue/SET_ISSUE';
const SET_CURRENT_ARTICLE = 'issue/SET_CURRENT_ARTICLE';

// action creators
export const setIssue = createAction(SET_ISSUE);
export const setCurrentArticle = createAction(SET_CURRENT_ARTICLE);

const initialState = Map({
  data: false,
  currentArticleIndex: 0
});

// reducer
export default handleActions({

  [SET_ISSUE]: (state, action) =>
    state.set('data', action.payload),

  [SET_CURRENT_ARTICLE]: (state, action) =>
    state.set('currentArticleIndex', action.payload),

}, initialState);

