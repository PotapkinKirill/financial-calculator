import React, { Component } from 'react';
import Navbar from './Navbar'
import {Payments} from './Payments'
import {Income} from './Income'
import {Charts} from './Charts'

class App extends Component {
  state = {
    render: 'Payments'
  }

  setTabRender = (tab) => {
    this.setState({
      render: tab
    })
  }

  renderTab() {
    switch (this.state.render) {
      case 'Payments':
        return <Payments />
      case 'Income':
        return <Income />
      case 'Charts':
        return <Charts />
      //case 'Settings':
      //  return <Settings />
      default:
        return "Coming soon"
    }
  }

  render() {
    return(
      <div className="App">
        <Navbar setRender={this.setTabRender}/>
        {this.renderTab()}
      </div>
    );
  }
}

export default App
