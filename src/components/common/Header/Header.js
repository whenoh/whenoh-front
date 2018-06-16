import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Header.scss';

const cx = classNames.bind(styles);
const Header = () => (
  <header className={cx('header')}>
    <Link to="/" className={cx('logo-wrapper')} alt="logo">
      <span className={cx('logo-txt')}>News Aggregated</span>
    </Link>
  </header>

);

export default Header;
