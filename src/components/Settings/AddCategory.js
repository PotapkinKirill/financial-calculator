import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddCategory extends Component {
  state = {
    category: null,
    disabled: false
  }

  handleClickAdd = () => {
    this.props.addCategory(this.state.category, this.props.type)
  }

  handleChange = ({target}) => {
    this.setState({
      category: target.value,
      disabled: this.ifExists(target.value)
    })
    if (this.ifExists(target.value)) {
      target.style = 'border-color: red'
    } else {
      target.style = ''
    }
  }

  ifExists = (category) => {
    return this.props.categories.some(({name}) => name === category)
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
              onChange={this.handleChange}
            />
          </div>

          <div className='form__footer'>
            <button 
              className='Payments__button Payments__add'
              onClick={this.handleClickAdd}
              disabled={this.state.disabled}
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

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(AddCategory)