import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Header.scss';

const cx = classNames.bind(styles);
const Header = () => (
  <header className={cx('header')}>
    <Link to="/" className={cx('logo-wrapper')} alt="logo">
      <img className={cx('logo-img')} src='https://s3.ap-northeast-2.amazonaws.com/whenoh/logo.png' alt='logo'/>
    </Link>
  </header>

);

export default Header;
