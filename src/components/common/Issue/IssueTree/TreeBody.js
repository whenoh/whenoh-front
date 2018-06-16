import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from '../styles/IssueTree.scss';

import TreeArticle from './TreeArticle';

const cx = classNames.bind(styles);
class TreeBody extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { articles } = this.props;
    return(
      <div>
        { articles.map((article, i) =>
          <TreeArticle key={article.title + i } { ...article } isLast={ articles.length === i + 1 }/>
        ) }
      </div>
    )
  }
}

export default TreeBody;
