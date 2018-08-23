import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CirclePicker, HuePicker } from 'react-color'
import ColorHash from 'color-hash'

const colorHash = new ColorHash()

class EditCategory extends Component {
  state = {
    category: this.props.category.name,
    disabled: true,
    color: this.props.category.color || colorHash.hex(this.props.category.color)
  }

  handleClickSave = () => {
    this.props.updateCategory({id: this.props.category.id, category: this.state.category, color: this.state.color})
    this.props.onClose()
  }

  handleChange = ({target}) => {
    let isCategoryExists = this.ifExists(target.value)
    let isCategoryEmpty = target.value === ''
    let isSameName = target.value === this.props.category.name
    let incorrect = isCategoryExists || isCategoryEmpty || isSameName
    let color
    if (this.state.isColorChanged)
      color = this.state.color
    else
      color = colorHash.hex(target.value)
    this.setState({
      category: target.value,
      disabled: incorrect,
      incorrect,
      isCategoryExists,
      isCategoryEmpty,
      isSameName,
      color
    })
  }

  ifExists = (category) => {
    return this.props.categories.some(({name}) => {
      return name === category && name !== this.props.category.name
    })
  }
  
  toggleChooseColor = () => {
    this.setState({
      displayColorPicker: !this.state.displayColorPicker
    })
  }

  setColor = (color) => {
    this.setState({
      color: color.hex,
      isColorChanged: true,
      disabled: false
    })
  }

  render(){
    let colorPicker = <div className='ColorPicker' style={{borderColor: this.state.color}}>
                        <div className='fade fade--transparent' onClick={this.toggleChooseColor}/>
                        <CirclePicker color={this.state.color} onChangeComplete={this.setColor}/>
                        <HuePicker color={this.state.color} onChange={this.setColor}/>
                      </div>
    let { isCategoryEmpty, isCategoryExists, isSameName, incorrect } = this.state
    return(
      <div className='EditCategory'>
        <div className='fade' onClick={this.props.onClose}/>

        <div className='form'>
          <div className='form__header'>
            <h2>Edit category '{this.props.category.name}'</h2>
          </div>

          <div className='form__body'>
            {isCategoryEmpty && <label className='incorrect'>Please, fill category</label>}
            {isCategoryExists && <label className='incorrect'>Category exists</label>}
            {isSameName && <label className='incorrect'>This is same name</label>}
            <div className='choose__wrapper'>
              <span className='choose' onClick={this.toggleChooseColor}>
                <div className='choose__color'style={{backgroundColor: this.state.color}}>
                </div>
              </span>
              {this.state.displayColorPicker && colorPicker}
              <input
                className={'input ' + (incorrect ? 'input--incorrect' : '')}
                defaultValue={this.state.category}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className='form__footer'>
            <button 
              className='button button_size_s button--save'
              onClick={this.handleClickSave}
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
