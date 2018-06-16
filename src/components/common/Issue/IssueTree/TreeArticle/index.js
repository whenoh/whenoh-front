import React, {Fragment} from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from '../../styles/IssueTree.scss';
import ArticleBox from './ArticleBox';
import ArticleNode from './ArticleNode';
import ArticleBranch from './ArticleBranch';
import ArticleTip from './ArticleTip';

const cx = classNames.bind(styles);
class TreeArticle extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log('DDDDDDDD', this.props);
    const { title, position, article, isLast } = this.props;
    return(
      <Fragment>
        <ArticleNode />
        { !isLast && <ArticleBranch /> }
        <ArticleBox position={ position } isLast={ isLast }>
          <div className={cx('article-title')}>{ title }</div>
          <div className={cx('article-url')}>{ article }</div>
        </ArticleBox>
      </Fragment>
    )
  }
}

export default TreeArticle;
