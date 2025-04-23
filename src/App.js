import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Graphic from './components/pages/Graphic';
import Referencias from './components/pages/Referencias';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/graphic' component={Graphic}/>
          <Route path="/referencias" component={Referencias} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
