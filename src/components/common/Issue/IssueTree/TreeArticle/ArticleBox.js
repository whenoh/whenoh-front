import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from '../../styles/IssueTree.scss';
import ArticleTip from './ArticleTip';

const cx = classNames.bind(styles);
class ArticleBox extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { position, children, isLast } = this.props;
    const isLeft = position === 'left';
    const float = isLeft ? 'right' : 'left';
    const flatCorner = isLeft ? 'borderTopRightRadius' : 'borderTopLeftRadius';
    const boxStyle = { float, [flatCorner] : 0 };
    const wrapperStyle = { float : position };
    if (isLast) boxStyle.marginTop = -12;
    return (
      <div className={cx('article-box-wrapper')} style={ wrapperStyle }>
        <div className={cx('article-box')} style={ boxStyle }>
          { children }
        </div>
        <ArticleTip position={ position } isLast={ isLast }/>
      </div>
    )
  }
}

export default ArticleBox;
