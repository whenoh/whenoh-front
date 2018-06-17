import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';

// actions
const SET_ISSUE = 'issue/SET_ISSUE';
const SET_CURRENT_ARTICLE = 'issue/SET_CURRENT_ARTICLE';
const SET_COMMENTS = 'issue/SET_COMMENTS';
const SET_SEARCH_RESULTS = 'issue/SET_SEARCH_RESULTS';

// action creators
export const setIssue = createAction(SET_ISSUE);
export const setCurrentArticle = createAction(SET_CURRENT_ARTICLE);
export const setComments = createAction(SET_COMMENTS);
export const setSearchResults = createAction(SET_SEARCH_RESULTS);

const initialState = Map({
  data: false,
  currentArticleIndex: 0,
  comments: false,
  searchResults: false,
});

// reducer
export default handleActions({

  [SET_ISSUE]: (state, action) =>
    state.set('data', action.payload),

  [SET_CURRENT_ARTICLE]: (state, action) =>
    state.set('currentArticleIndex', action.payload),

  [SET_COMMENTS]: (state, action) =>
    state.set('comments', action.payload),

  [SET_SEARCH_RESULTS]: (state, action) =>
    state.set('searchResults', action.payload),

}, initialState);

