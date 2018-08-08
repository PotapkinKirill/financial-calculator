import React, {Component} from 'react';
import YearMonthSelector from 'react-year-month-selector';

export class Range extends Component {
  state = {
    isOpen: false,
    year: (new Date()).getFullYear(),
    month: (new Date()).getMonth()
  }
  
  handleChoose = (year,month) => {
    this.setState({
      year: year,
      month: month
    })
  }

  handleClose = () => {
    this.setState({
      isOpen: false
    })
  }

  handleOpen = () => {
    this.setState({
      isOpen: true
    })
  }

  render(){
    return(
      <div className="payments-report">
        <p>Report month:</p>
        <div className="payments-calendar">
          <input onClick={this.handleOpen} readOnly value={this.state.month + 1 + '/' + this.state.year} />
          <YearMonthSelector
            year={this.state.year}
            month={this.state.month}
            onChange={this.handleChoose}
            open={this.state.isOpen}
            onClose={this.handleClose}
          />
        </div>
      </div>
    )
  }
}