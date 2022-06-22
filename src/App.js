import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
import BeaniesPage from './BeaniesPage.js';
import BeanieDetail from './BeanieDetail.js';

export default function App() {
  return (
    <Router>
      <div className='App'>
        <ul>
          <li>
            <NavLink exact activeClassName='active-link' to="/">Home</NavLink>
          </li>
        </ul>
        <ul>
          <li>
            <NavLink exact activeClassName="active-link" to="/BeaniesPage">Beanies Page</NavLink>
          </li>
        </ul>
        <Switch>
          <Route exact path="/">
            <BeaniesPage />
            {/* this home page route should list all the beanies */}
          </Route>
          <Route exact path="/beanie-page"> 
            <BeanieDetail />
            {/* this route should point to a particular beanie baby by id and render that specific BeanieDetail page */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}