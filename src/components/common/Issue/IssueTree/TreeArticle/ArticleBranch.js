import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from '../../styles/IssueTree.scss';

const cx = classNames.bind(styles);
class ArticleBranch extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div className={cx('article-branch')}>

      </div>
    )
  }
}

export default ArticleBranch;
