import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ArgonForm from './components/ArgonForm'
import Dashboard from './components/Dashboard'
import Home from './components/Home'

function App() {
  return (
  <Router>
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route exact path='/form'>
        <ArgonForm />
      </Route>
      <Route exact path='/dashboard'>
        <Dashboard />
      </Route>
    </Switch>
  </Router>
  );
}

export default App;
