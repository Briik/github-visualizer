import React, { PureComponent } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home';

export default class App extends PureComponent {
  render = () =>(
    <Router>
      <Switch>
        <Route component={Home} />
      </Switch>
    </Router>);
}
