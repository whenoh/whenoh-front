import React from 'react';
import SearchInput from './SearchInput';
import PostSlider from 'components/common/PostSlider';
import classNames from 'classnames/bind';
import styles from './SearchBody.scss';
import {connect} from "react-redux";

const cx = classNames.bind(styles);

const MainPage = ({ searchResults }) => (
  <div className={cx('search-wrap')}>
    <SearchInput />
    { searchResults &&<PostSlider title={'POPULAR CARDS'}/> }
  </div>
);

const mapStateToProps = state => ({
  issue : state.issue.get('data').articles,
  searchResults : state.issue.get('searchResults'),
});

const mapDispatchToProps = dispatch => ({
  // setIssue: issue => dispatch(issueActions.setIssue(issue))
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
