import React from 'react';
import './styles/app.scss'


import {
    Header,
    NotFound,
    Main
} from './components'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
              <Header
                  title="Cooking recipes"
                  description="Roast chicken"
                  imageUrl="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
              />
              <Switch>
                  <Route exact path='/' component={Main}/>
                  <Route path='*' component={NotFound}/>
              </Switch>
      </Router>
    </div>
  );
}

export default App;
