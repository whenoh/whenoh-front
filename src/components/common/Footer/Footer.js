import React from 'react';
import classNames from 'classnames/bind';
import styles from './Footer.scss';

const cx = classNames.bind(styles);

const Footer = () => (
  <div className={cx('footer')}>
    <div className={cx('footer-logo')}>
      <span className={cx('footer-logo-img')} />
      <span className={cx('footer-logo-txt')}>Waffle</span>
    </div>
    <span className={cx('footer-info')}>© Waffle.lol, 2018</span>
  </div>
);

export default Footer;
