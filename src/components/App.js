import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { MainPage, PostWritePage } from 'pages';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/post/write" component={PostWritePage} />
        </Switch>
      </div>
    );
  }
}

export default App;
