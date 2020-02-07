import React, { Component } from 'react';
import LandingPage from './LandingPage';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import Resume from './Resume';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



class Main extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/About' component={About} />
          <Route exact path='/Contact' component={Contact} />
          <Route exact path='/Projects' component={Projects} />
          <Route exact path='/Resume' component={Resume} />
          <Route exact path='/Home' component={LandingPage} />
        </Switch>
      </Router>




    )
  }
}


export default Main;