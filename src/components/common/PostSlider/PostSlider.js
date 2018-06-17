import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './PostSlider.scss';
import _ from 'lodash';
import testImg from 'static/image.jpg';

const cx = classNames.bind(styles);

const PostSlider = ({searchResults}) => {
  return (
    <div className={cx('post-slider-wrapper')}>
      <div className={cx('title')}>Requested Issues :</div>
      <div className={cx('post-slider')}>
        { searchResults && searchResults.map((issue) =>
          <Link className={cx('post')} to={'/issue?id=' + issue.id }>
            <img src={issue.image} alt='issue thumbnail' className={cx('search-thumbnail')}/>
            <div className={cx('post-desc-warp')}>
              <div className={cx('post-desc')}>{issue.description}</div>
            </div>
          </Link>)}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  issue : state.issue.get('data').articles,
  searchResults : state.issue.get('searchResults'),
});

const mapDispatchToProps = dispatch => ({
  // setIssue: issue => dispatch(issueActions.setIssue(issue))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostSlider);
