import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import MainNavBar from './MainNavBar';

const App = () => {
  return (
    <div>
      <Router>
        <div>
          <MainNavBar></MainNavBar>
          <Switch>
            <Route path='/' exact component={HomePage}></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
