import React, {Fragment} from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from '../../styles/IssueTree.scss';

const cx = classNames.bind(styles);
class ArticleDate extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { time, position } = this.props;
    const style = { float : position === 'left' ? 'right' : 'left' };
    const dateObject = new Date(+time);
    console.log(dateObject);
    return (
      <div className={cx('time-rapper')} style={ style }>
        <div className={cx('article-time')} style={{ float: position, position: 'relative' }}>
          <div>{ `${dateObject.getFullYear()}.${dateObject.getMonth() + 1}.${dateObject.getDate()}` }</div>
          <div>{ `${dateObject.getHours()}:${dateObject.getMinutes() }` }</div>
        </div>
      </div>
    )
  }
}

export default ArticleDate;
