import React from 'react';
import classNames from 'classnames/bind';
import styles from './Footer.scss';

const cx = classNames.bind(styles);

const Footer = () => (
  <div className={cx('footer')}>
    <div className={cx('footer-logo')}>
      <span className={cx('footer-logo-txt')}>when. oh,</span>
    </div>
    <span className={cx('footer-info')}>© when. oh, 2018</span>
  </div>
);

export default Footer;
