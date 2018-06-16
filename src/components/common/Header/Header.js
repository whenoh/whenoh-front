import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { s3Url } from 'constant';
import styles from './Header.scss';

const cx = classNames.bind(styles);
const Header = () => (
  <header className={cx('header')}>
    <Link to="/" className={cx('logo-wrapper')} alt="logo">
      <img className={cx('logo')} src={`${s3Url}/image/common/header/logo.png`} alt="logo" />
      <span className={cx('logo-txt')}>Waffle</span>
    </Link>
  </header>

);

export default Header;
