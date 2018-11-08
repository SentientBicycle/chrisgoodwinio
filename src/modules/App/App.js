import React, { Component } from 'react';
import './App.css';

import Header from './components/Header/Header';
import Blog from '../Blog/Blog';
import Main from '../Main/Main';
import DC from '../DC/DC';
import Modules from '../Modules/Modules'
import { Switch, Route } from 'react-router-dom'

class App extends Component {

  render() {
    console.log(this.props.children);
    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path='/' component={Main}/>
          <Route path='/Blog' component={Blog}/>
          <Route path='/Modules' component={Modules}/>
          <Route path='/DailyCoder' component={DC}/>
        </Switch>
      </div>
    );
  }
}


export default App;
