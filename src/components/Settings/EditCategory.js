import React, { Component } from 'react';
import { connect } from 'react-redux';

class EditCategory extends Component {
  state = {
    category: this.props.category.name,
    disabled: true
  }

  handleClickSave = () => {
    this.props.updateCategory(this.props.category.id, this.state.category, this.props.type)
  }

  handleChange = ({target}) => {
    let isCategoryExists = this.ifExists(target.value)
    let isCategoryEmpty = target.value === ''
    let isSameName = target.value === this.props.category.name
    this.setState({
      category: target.value,
      disabled: isCategoryExists || isCategoryEmpty || isSameName,
      isCategoryExists,
      isCategoryEmpty,
      isSameName
    })
  }

  ifExists = (category) => {
    return this.props.categories.some(({name}) => {
      return name === category && name !== this.props.category.name
    })
  }
  
  render(){
    let { isCategoryEmpty, isCategoryExists, isSameName } = this.state
    return(
      <div className='EditCategory'>
        <div className='fade' onClick={this.props.onClose}/>

        <div className='form'>
          <div className='form__header'>
            <h2>Edit category '{this.props.category.name}'</h2>
          </div>

          <div className='form__body'>
            {isCategoryEmpty && <label className='empty'>Please, fill category</label>}
            {isCategoryExists && <label className='empty'>Category exists</label>}
            {isSameName && <label className='empty'>This is same name</label>}
            <input
              className={'input ' + (isCategoryEmpty || isCategoryExists || isSameName ? 'input--incorrect' : '')}
              defaultValue={this.state.category}
              onChange={this.handleChange}
            />
          </div>

          <div className='form__footer'>
            <button 
              className='button button_size_s button--save'
              onClick={this.props.updateCategory}
              disabled={this.state.disabled}
              >Save
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

export default connect(mapStateToProps)(EditCategory)