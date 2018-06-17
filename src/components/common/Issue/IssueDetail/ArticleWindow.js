import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from '../styles/IssueDetail.scss';

import * as issueActions from '../../../../store/reducers/issue';

const cx = classNames.bind(styles);
class ArticleWindow extends React.Component {
  render() {
    const { articles, currentArticleIndex } = this.props;
    return (
      <div className={cx('article-window')}>
        { articles &&
          <iframe
            className={cx('article-iframe')}
            src={articles[currentArticleIndex].article}
            title={articles[currentArticleIndex].title}
          />
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  articles : state.issue.get('data').articles,
  currentArticleIndex : state.issue.get('currentArticleIndex')
});

const mapDispatchToProps = dispatch => ({
  setIssue: issue => dispatch(issueActions.setIssue(issue))
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticleWindow);
