import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from '../../styles/IssueTree.scss';
import ArticleTip from './ArticleTip';
import * as issueActions from 'store/reducers/issue';
import {connect} from 'react-redux';

const cx = classNames.bind(styles);
class ArticleBox extends React.Component {
  constructor(props) {
    super(props);
    this.setCurrentArticle = this.setCurrentArticle.bind(this);
  }

  setCurrentArticle() {
    const { setCurrentArticle, articleIndex } = this.props;
    setCurrentArticle(articleIndex);
  }

  render() {
    const { position, children, isLast } = this.props;
    const isLeft = position === 'left';
    const float = isLeft ? 'right' : 'left';
    const flatCorner = isLeft ? 'borderTopRightRadius' : 'borderTopLeftRadius';
    const boxStyle = { float, [flatCorner] : 0 };
    const wrapperStyle = { float : position };
    // if (isLast) boxStyle.marginTop = -12;
    return (
      <div className={cx('article-box-wrapper')} style={ wrapperStyle }>
        <div className={cx('article-box')} style={ boxStyle } onClick={this.setCurrentArticle}>
          { children }
        </div>
        <ArticleTip position={ position } isLast={ isLast }/>
      </div>
    )
  }
}

const mapStateToProps = () => ({

});
const mapDispatchToProps = dispatch => ({
  setCurrentArticle: issue => dispatch(issueActions.setCurrentArticle(issue))
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticleBox);
