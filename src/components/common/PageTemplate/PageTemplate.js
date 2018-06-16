import React from 'react';
import classNames from 'classnames/bind';
import Header from 'components/common/Header';
import Footer from 'components/common/Footer';
import style from './PageTemplate.scss';
import PropTypes from 'prop-types';


const cx = classNames.bind(style);

const PageTemplate = ({ children }) => (
  <div className={cx('page-template')}>
    <Header />
    <main className={cx('main')}>
      {children}
    </main>
    <Footer />
  </div>
);

PageTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageTemplate;
