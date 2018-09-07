import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CirclePicker, HuePicker } from 'react-color'
import ColorHash from 'color-hash'

const colorHash = new ColorHash()

class AddCategory extends Component {
  state = {
    category: null,
    color: colorHash.hex(null),
    isColorChanged: false,
    disabled: true
  }

  handleClickAdd = () => {
    this.props.addCategory(this.state.category, this.props.type, this.state.color)
    this.props.onClose()
  }

  handleChange = ({target}) => {
    let isCategoryExists = this.ifExists(target.value)
    let isCategoryEmpty = target.value === ''
    let color
    if (this.state.isColorChanged)
      color = this.state.color
    else
      color = colorHash.hex(target.value)
    this.setState({
      category: target.value,
      disabled: isCategoryExists || isCategoryEmpty,
      isCategoryExists,
      isCategoryEmpty,
      color
    })
  }

  ifExists = (category) => {
    return this.props.categories.some(({name}) => name === category)
  }

  toggleChooseColor = () => {
    this.setState({
      displayColorPicker: !this.state.displayColorPicker
    })
  }

  setColor = (color) => {
    this.setState({
      color: color.hex,
      isColorChanged: true
    })
  }

  render() {
    let colorPicker = <div className='ColorPicker' style={{borderColor: this.state.color}}>
                        <div className='fade fade--transparent' onClick={this.toggleChooseColor}/>
                        <CirclePicker color={this.state.color} onChangeComplete={this.setColor}/>
                        <HuePicker color={this.state.color} onChange={this.setColor}/>
                      </div>
    return(
      <div className='AddCategory'>
        <div className='fade' onClick={this.props.onClose}/>

        <div className='form'>
          <div className='form__header'>
            <h2>Add {this.props.type.toLowerCase()} category</h2>
          </div>

          <div className='form__body'>
            {this.state.isCategoryEmpty && <label className='incorrect'>Please, fill category</label>}
            {this.state.isCategoryExists && <label className='incorrect'>Category exists</label>}
            <div className='choose__wrapper'>
              <span className='choose' onClick={this.toggleChooseColor}>
                <div className='choose__color'style={{backgroundColor: this.state.color}}>
                </div>
              </span>
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
