import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import styles from './SearchBody.scss';
import * as issueActions from '../../../store/reducers/issue';

const cx = classNames.bind(styles);

class SearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      issues: [],
      query : ''
    };
    this.onChange = this.onChange.bind(this);
    this.search = this.search.bind(this);
    this.setIssues = this.setIssues.bind(this);
  }

  onChange({ target }) {
    this.setState({ query : target.value })
  }

  search({ keyCode }) {
    console.log(keyCode);
    if (keyCode !== 13 ) return;
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load', this.setIssues);
    xhr.open('GET', `https://serverless.arteight.co.kr/v1/issue?sort=desc asc&keyword=&cate,`);
    xhr.send();
  }

  setIssues({ target }) {
    const response = JSON.parse(target.response);
    this.props.setSearchResults(response);
  }

  render() {
    return (
      <div className={cx('search-input-wrapper')}>
        <input className={cx('search-input')} value={ this.state.query } onChange={ this.onChange } onKeyDown={ this.search }>
        </input>
      </div>
    );
  }
}

const mapStateToProps = () => ({

});
const mapDispatchToProps = dispatch => ({
  setSearchResults: comments => dispatch(issueActions.setSearchResults(comments)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);
