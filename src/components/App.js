import React, { Component } from 'react';
import Navbar from './Navbar'
import Payments from './Payments'
import Income from './Income'
import Charts from './Charts'
import Settings from './Settings'

class App extends Component {
  state = {
    tab: 'Payments'
  }

  setTabRender = (tab) => {
    this.setState({
      tab: tab
    })
  }

  renderTab() {
    switch (this.state.tab) {
      case 'Payments':
        return <Payments />
      case 'Income':
        return <Income />
      case 'Charts':
        return <Charts />
      case 'Settings':
        return <Settings />
      default:
        return "Coming soon"
    }
  }

  render() {
    return(
      <div className="App">
        <Navbar setRender={this.setTabRender} tab={this.state.tab}/>
        {this.renderTab()}
      </div>
    );
  }
}

export default App
