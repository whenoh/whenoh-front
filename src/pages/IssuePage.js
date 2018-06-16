import React from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom'
import PageTemplate from 'components/common/PageTemplate';
import { IssueTree, IssueDetail } from 'components/common/Issue';
import { getquery } from 'helpers';
import * as issueActions from 'store/reducers/issue';

class IssuePage extends React.Component {
  constructor (props) {
    super(props);
    this.getIssue();
  }

  getIssue() {
    const { id } = getquery(this.props);
    if (!id) return;
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load', this.setIssue.bind(this));
    xhr.open('GET', `https://serverless.arteight.co.kr/v1/issue/${id}`);

    // xhr.open('GET', `https://fo8qoov62m.execute-api.ap-northeast-2.amazonaws.com/dev/issue/${id}`);
    // xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
    xhr.send();
  }

  setIssue({ target }) {
    const response = target.response;
    if (!response) return;
    const data = JSON.parse(response);
    this.props.setIssue(data);
  }

  render() {
    return (
      <PageTemplate>
        <IssueTree />
        <IssueDetail />
      </PageTemplate>
    );
  }
}

const mapStateToProps = () => ({

});
const mapDispatchToProps = dispatch => ({
  setIssue: issue => dispatch(issueActions.setIssue(issue))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(IssuePage));
