import React, {Component} from 'react';
import Head from './Categories/Head'
import Body from './Categories/Body'
import AddCategory from './AddCategory'
import EditCategory from './EditCategory'

class Categories extends Component {
  state = {
    add: false,
    edit: false,
    category: null
  }

  onClickAdd = () => {
    this.setState({
      add: true
    })
  }

  onClickEdit = category => () => {
    this.setState({
      edit: true,
      category
    })
  }

  onClickDelete = category => () => {
    if (window.confirm(`Are you sure to delete category '${category.name}'?`))
      this.props.deleteCategory(category.id)
  }

  onClose = () => {
    this.setState({
      add: false,
      edit: false,
      category: null
    })
  }

  render(){
    return(
      <div className='Category'>
        <Head type={this.props.type} onClickAdd={this.onClickAdd} />
        <Body
          categories={this.props.categories}
          onClickEdit={this.onClickEdit}
          onClickDelete={this.onClickDelete}
        />
        {
          this.state.add
          && <AddCategory
                onClose={this.onClose}
                addCategory={this.props.addCategory}
                type={this.props.type}
              />
        }
        {
          this.state.edit
          && <EditCategory
              onClose={this.onClose}
              updateCategory={this.props.updateCategory}
              category={this.state.category}
            />
        }
      </div>
    )
  }
}

export default (Categories)