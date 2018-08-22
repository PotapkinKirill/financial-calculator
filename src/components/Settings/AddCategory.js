import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CirclePicker, HuePicker } from 'react-color'

class AddCategory extends Component {
  state = {
    category: null,
    disabled: true,
    displayColorPicker: false
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

  openChooseColor = () => {
    this.setState({
      displayColorPicker: true
    })
  }

  setColor = (color) => {
    console.log(color)
    this.setState({
      color
    })
  }

  render() {
    let colorPicker = <div>
      <CirclePicker onChange={this.setColor}/>
      <HuePicker onChange={this.setColor}/>
    </div>

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
            <div>
              <div onClick={this.openChooseColor}>Pick color</div>
              {this.state.displayColorPicker && colorPicker}
              <input
                className={'input ' + (this.state.isCategoryEmpty || this.state.isCategoryExists ? 'input--incorrect' : '')}
                defaultValue={this.state.category}
                onChange={this.handleChange}
              />
            </div>
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