import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'

import Nav from './Nav'
import Home from '../components/Home'
import Chat from '../components/Chat'
import NotFound from '../components/NotFound'

class App extends Component {
  render() {
    return(
      <div className="container">
        <Nav/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path={`/category/view/:categoryId`} component={Chat}/>
          <Route component={NotFound}/>
        </Switch>
      </div>
    )
  }
}

export default App
