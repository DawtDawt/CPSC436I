import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';

const App = () => {   //this is how you make a functional component
  return (
    <Router>
      <div className="navbar">
        <Link to={'/'} className='navlink'>Home</Link>
        <Link to={'/about'} className='navlink'>About</Link>
      </div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
      </Switch>
    </Router>
  );
}

export default App;