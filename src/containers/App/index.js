import React, {Component} from 'react'

import HeaderNavigation from '../HeaderNavigation'
import Disclaimer from '../Disclaimer'
import Routing from '../Routing'


class App extends Component {
  render() {
    return (
      <div className="app">
       <HeaderNavigation />
        <Routing />
       <Disclaimer />
      </div>
    )
  }
} 

export default App
