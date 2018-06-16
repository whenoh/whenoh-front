import React, { Fragment } from 'react';
import classNames from 'classnames/bind';
import styles from './PostSlider.scss';
import _ from 'lodash';
import testImg from 'static/image.jpg';

const cx = classNames.bind(styles);

const PostSlider = ({title}) => {
  return (
    <div className={cx('post-slider-wrapper')}>
      <div className={cx('title')}>{title}</div>
      <div className={cx('post-slider')}>
        {_.range(10).map(() =>
          <div className={cx('post')}>
            <img src={testImg}/>
          </div>)}
      </div>
    </div>
  );
};

export default PostSlider;
