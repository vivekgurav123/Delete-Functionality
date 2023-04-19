// Write your code here
import {Component} from 'react'

class TodoItem extends Component {
  render() {
    const {eachItem, deleteTodo, uniqueKey} = this.props
    const {title} = eachItem

    const onDeleteFunc = () => {
      deleteTodo(uniqueKey)
    }

    return (
      <li>
        <p>{title}</p>
        <button type="button" onClick={onDeleteFunc}>
          Delete
        </button>
      </li>
    )
  }
}
export default TodoItem
