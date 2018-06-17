import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from '../../styles/IssueTree.scss';

const cx = classNames.bind(styles);
class ArticleTip extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { position } = this.props;
    const isLeft = position === 'left';
    const tipDirection = isLeft ? 'borderLeft' : 'borderRight';
    const tipFloat = isLeft ? 'right' : 'left';
    const tipStyle = { [tipDirection]: '22px solid gainsboro', float : tipFloat };
    // if (this.props.isLast) tipStyle.marginTop = -12;
    return(
      <div className={cx('article-tip')} style={ tipStyle }>

      </div>
    )
  }
}

export default ArticleTip;
