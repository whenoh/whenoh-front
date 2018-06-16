import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './FirstArticle.scss';


const cx = classNames.bind(styles);

const FirstArticle = () => (
  <article className={cx('first-article')}>

  </article>
);

export default FirstArticle;
