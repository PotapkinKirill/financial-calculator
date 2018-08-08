import React, {Component} from 'react';
import YearMonthSelector from 'react-year-month-selector';

export class Range extends Component {
  state = {
    isOpen: false,
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
          <input onClick={this.handleOpen} readOnly value={this.props.month + 1 + '/' + this.props.year} />
          <YearMonthSelector
            year={this.props.year}
            month={this.props.month}
            onChange={this.props.handleChoose}
            open={this.state.isOpen}
            onClose={this.handleClose}
          />
        </div>
      </div>
    )
  }
}