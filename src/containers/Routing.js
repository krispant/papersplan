import React from 'react';
import {Route, Switch} from 'react-router-dom'
import {Home, NotFound,TaxCalculation} from '.'

import FinanceInfo from './FinanceInfo'
import ContactUs from './ContactUs'
import Help from './Help'

export default class Routing extends React.Component {
  render() {
    return (   
      <div>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/TaxCalculation" component={TaxCalculation}/>
        <Route exact path="/FinanceInfo" component={FinanceInfo}/>
        <Route exact path="/ContactUs" component={ContactUs}/>
          <Route exact path="/Help" component={Help}/>
        <Route component={NotFound}/>
      </Switch>  
      </div>
    );
  }
}
