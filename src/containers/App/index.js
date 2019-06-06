import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'

import {Home, NotFound,TaxCalculation,CalculateGTI} from '../'

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="container mt-4">
          <Switch>
          <Route exact path="/" component={Home}/>
            <Route exact path="/TaxCalculation" component={TaxCalculation}/>
            <Route exact path="/CalculateGTI" component={CalculateGTI}/>
            <Route component={NotFound}/>
          </Switch>
        </div>
      </div>
    )
  }
}

export default App
5