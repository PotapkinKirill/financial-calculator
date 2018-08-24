import React, { Component } from 'react';
import Page from './Page'
import Name from './Name'

class Previous extends Component {
  state = {
    page: 0
  }

  handleClickPrev = () => {
    this.setState({
      page: this.state.page - 1
    })
  }

  handleClickNext = () => {
    this.setState({
      page: this.state.page + 1
    })
  }

  render() {
    let paging
    let payments = this.props.payments
    if (this.props.payments.length > 5) {
      let pages = Math.ceil(this.props.payments.length / 5)
      let { page } = this.state
      payments = this.props.payments.slice(0 + page * 5, 5 + page * 5)
      paging = <Page
                page={page} pages={pages}
                handleClickPrev={this.handleClickPrev}
                handleClickNext={this.handleClickNext}
               />
    }
    return (payments.length !== 0)
    && <div className="previous">
          <h3 className='previous__title'>Previous payments:</h3>
          {payments.map((payment) =>
              <div className='previous__list' key={payment.id}>
                  <span className='radio__wrapper'>
                    <div className='radio' style={{backgroundColor: payment.color}}/>
                  </span>
                  <Name name={payment.category}/>
                  <span className="previous__list--price">
                    ${Math.round(payment.price * 100) / 100}
                  </span>
              </div>
          )}
          {paging}
        </div>
  }
}

export default (Previous)