import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { MainPage } from 'pages';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={MainPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
