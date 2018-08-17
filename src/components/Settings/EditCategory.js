import React, { Component } from 'react';
import { connect } from 'react-redux';

class EditCategory extends Component {
  state = {
    category: this.props.category.name,
    disabled: false
  }

  handleClickSave = () => {
    this.props.updateCategory(this.props.category.id, this.state.category, this.props.type)
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
    return this.props.categories.some(({name}) => {
      return name === category && name !== this.props.category.name
    })
  }
  
  render(){
    return(
      <div className='EditCategory'>
        <div className='fade' onClick={this.props.onClose}/>

        <div className='form'>
          <div className='form__header'>
            <h2>Edit category '{this.props.category.name}'</h2>
          </div>

          <div className='form__body'>
            <input
              className='Payments__input'
              defaultValue={this.state.category}
              onChange={this.handleChange}
            />
          </div>

          <div className='form__footer'>
            <button 
              className='Payments__button Payments__save'
              onClick={this.props.updateCategory}
              disabled={this.state.disabled}
              >Save
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

export default connect(mapStateToProps)(EditCategory)