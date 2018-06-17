import React, {Fragment} from 'react';
import classNames from 'classnames/bind';
import styles from '../styles/IssueDetail.scss';

const cx = classNames.bind(styles);
class ArticleComment extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    const { username, updatedAt, text } = this.props;
    const date = new Date(updatedAt);
    return (
      <div>
        <div>
          <span className={cx('comment-username')}>{ username }</span>
          <span className={cx('comment-date')}>{ date.toLocaleString() }</span>
        </div>
        <div className={cx('comment-text')}>{ text }</div>
      </div>
    )
  }
}

export default ArticleComment;
