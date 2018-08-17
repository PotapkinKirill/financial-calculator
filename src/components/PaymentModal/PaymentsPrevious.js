import React, { Component } from 'react';

class PaymentsPrevious extends Component {
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
      let pages = parseInt(this.props.payments.length / 5, 10)
      let { page } = this.state
      payments = this.props.payments.slice(0 + page * 5, 5 + page * 5)
      paging = <div><p>Page {page + 1}/{pages}</p>
                      { 
                        page > 0 &&
                        <button
                          className='Payments__button prev'
                          onClick={this.handleClickPrev}>
                          {'<< Prev'}
                        </button>
                      }
                      {
                        page < pages - 1 &&
                        <button
                          className = 'Payments__button next'
                          onClick={this.handleClickNext}
                          >{'Next >>'}
                        </button> 
                      }
                    </div>
    }
    return (payments.length !== 0)
    && <div className="Payments__views">
          <h3>Previous payments:</h3>
          <table>
            <tbody>
              {payments.map((payment) => 
                  <tr key={payment.id}>
                      <td className="Payments__views-input-radio"><input type="radio" defaultChecked /></td>
                      <td className="Payments__views-category">{payment.category}:</td>
                      <td className="Payments__views-price">${Math.round(payment.price * 100) / 100}</td>
                  </tr>
              )}
            </tbody>
          </table>
          {paging}
        </div>
  }
}

export default (PaymentsPrevious)