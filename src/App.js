import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Graphic from './components/pages/Graphic';
import Referencias from './components/pages/Referencias';
import CodigoEticoParte1 from './components/pages/CodigoEticoParte1';
import CodigoEticoParte2 from './components/pages/CodigoEticoParte2';
import CodigoEtico3 from './components/pages/CodigoEticoParte3';

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
          <Route path='/codigo-etico-1' component={CodigoEticoParte1} />
          <Route path='/codigo-etico-2' component={CodigoEticoParte2} />
          <Route path="/codigo-etico-3" component={CodigoEtico3} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
