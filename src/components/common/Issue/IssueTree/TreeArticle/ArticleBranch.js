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
    const opacity = this.props.isLast ? 0 : 1;
    return(
      <div className={cx('article-branch')} style={{ opacity }}>

      </div>
    )
  }
}

export default ArticleBranch;
