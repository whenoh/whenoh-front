import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from '../styles/IssueTree.scss';

const cx = classNames.bind(styles);
class TreeHeader extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { title, description, category } = this.props;
    return(
      <div className={cx('header')}>
        <div className={cx('title')}>{ title }</div>
        <div className={cx('sub-title')}>{ description }</div>
        <div className={ cx('issue-category') }>{ `#${category}` }</div>
      </div>
    )
  }
}

export default TreeHeader;
