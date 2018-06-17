import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from '../styles/IssueDetail.scss';
import * as issueActions from '../../../../store/reducers/issue';
import ArticleWindow from './ArticleWindow';
import ArticleComment from './ArticleComment';

const cx = classNames.bind(styles);
const IssueDetail = ({ comments }) => (
  <div className={cx('main')}>
    <ArticleWindow />
    <div className={cx('article-comment-wrapper')}>
      { comments && comments.map((comment) => <ArticleComment { ...comment } />)}
    </div>
  </div>
);

const mapStateToProps = state => ({
  issue : state.issue.get('data').articles,
  comments : state.issue.get('comments'),
});

const mapDispatchToProps = dispatch => ({
  // setIssue: issue => dispatch(issueActions.setIssue(issue))
});

export default connect(mapStateToProps, mapDispatchToProps)(IssueDetail);
