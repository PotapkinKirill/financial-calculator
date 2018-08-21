import React, {Component} from 'react';
import Pencil from './Pencil'
import Trash from './Trash'
import AddCategory from './AddCategory'
import EditCategory from './EditCategory'

class Categories extends Component {
  state = {
    add: false,
    edit: false,
    category: null
  }

  handleClickAdd = () => {
    this.setState({
      add: true
    })
  }

  handleClickEdit = category => () => {
    this.setState({
      edit: true,
      category: category
    })
  }

  handleClickDelete = category => () => {
    if (window.confirm("Are you sure you wish to delete category '" + category.name + "'?"))
      this.props.deleteCategory({id: category.id})
  }

  handleClose = () => {
    this.setState({
      add: false,
      edit: false,
      category: null
    })
  }

  render(){
    let form = null
    if (this.state.add)
      form = <AddCategory
                onClose={this.handleClose}
                addCategory={this.props.addCategory}
                type={this.props.type}
              />
    if (this.state.edit)
      form = <EditCategory
                onClose={this.handleClose}
                updateCategory={this.props.updateCategory}
                category={this.state.category}
              />
    return(
      <div className='Category'>
        <table>
          <thead>
            <tr>
              <td><h4>{this.props.type} categories</h4></td>
              <td>Add new</td>
              <td onClick={this.handleClickAdd}>
                <div className='Category__add'>
                  <div className='Category__add-button'></div>
                </div>
              </td>
            </tr>
          </thead>
          <tbody>
            {this.props.categories.map(category => 
              <tr key={category.id}>
                <td className='category__name'>- {category.name}</td>
                <td>
                  <button
                    className='edit'
                    onClick={this.handleClickEdit(category)}
                    ><Pencil/>
                  </button>
                </td>
                <td>
                  <button
                    className='delete'
                    onClick={this.handleClickDelete(category)}
                    ><Trash/>
                  </button>
                </td>
              </tr>
            )}
          </tbody>
        </table>
        {form}
      </div>
    )
  }
}

export default (Categories)