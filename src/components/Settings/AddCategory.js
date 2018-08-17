import React, { Component } from 'react';

class AddCategory extends Component {
  state = {
    category: null
  }

  handleClickAdd = () => {
    this.props.addCategory(this.state.category, this.props.type)
  }

  render() {
    return(
      <div className='AddCategory'>
        <div className='fade' onClick={this.props.onClose}/>
        <div className='form'>
          <div className='form__header'>
            <h2>Add {this.props.type.toLowerCase()} category</h2>
          </div>
          <div className='form__body'>
            <input
              className = 'Payments__input'
              defaultValue={this.state.category}
              onChange={({target}) => this.setState({category: target.value})}
            />
          </div>
          <div className='form__footer'>
            <button 
              className='Payments__button Payments__add'
              onClick={this.handleClickAdd}
              >Add
            </button>
            <button
              className='Payments__button Payments__cancel'
              onClick={this.props.onClose}
              >Cancel
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default (AddCategory)