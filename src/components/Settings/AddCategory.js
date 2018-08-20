import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddCategory extends Component {
  state = {
    category: null,
    disabled: true
  }

  handleClickAdd = () => {
    this.props.addCategory(this.state.category, this.props.type)
  }

  handleChange = ({target}) => {
    let isCategoryExists = this.ifExists(target.value)
    let isCategoryEmpty = target.value === ''
    this.setState({
      category: target.value,
      disabled: isCategoryExists || isCategoryEmpty,
      isCategoryExists,
      isCategoryEmpty
    })
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
            {this.state.isCategoryEmpty && <label className='empty'>Please, fill category</label>}
            {this.state.isCategoryExists && <label className='empty'>Category exists</label>}
            <input
              className={'input ' + (this.state.isCategoryEmpty || this.state.isCategoryExists ? 'input--incorrect' : '')}
              defaultValue={this.state.category}
              onChange={this.handleChange}
            />
          </div>

          <div className='form__footer'>
            <button 
              className='button button_size_s button--add'
              onClick={this.handleClickAdd}
              disabled={this.state.disabled}
              >Add
            </button>

            <button
              className='button button_size_s button--cancel'
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