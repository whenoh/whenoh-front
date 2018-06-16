import React, { Fragment } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styles from '../styles/IssueTree.scss';
import * as issueActions from 'store/reducers/issue';
import TreeHeader from './TreeHeader';
import TreeBody from './TreeBody';

const cx = classNames.bind(styles);
class IssueTree extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { issue } = this.props;
console.log(issue);
    return (
      <div className={cx('main')}>
        { issue &&
          <Fragment>
            <TreeHeader title={ issue.title } description={ issue.description }/>
            <TreeBody articles={ issue.articles } />
          </Fragment>
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  issue : state.issue.get('data')
});

const mapDispatchToProps = dispatch => ({
  setIssue: issue => dispatch(issueActions.setIssue(issue))
});

export default connect(mapStateToProps, mapDispatchToProps)(IssueTree);
