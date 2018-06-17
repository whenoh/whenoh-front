import React, {Fragment} from 'react';
import classNames from 'classnames/bind';
import styles from '../styles/IssueTree.scss';

const cx = classNames.bind(styles);
class ArticleComment extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        { this.props.title }
      </div>
    )
  }
}

export default ArticleComment;
