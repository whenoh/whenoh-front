import React from 'react';
import classNames from 'classnames/bind';
import styles from './PostWriteWrapper.scss';
import PostWriteForm from '../PostWriteForm';


`const cx = classNames.bind(styles);
`
const PostWriteWrapper = () => {
  return (
    <div>
      <PostWriteForm />
    </div>
  );
};

export default PostWriteWrapper;
