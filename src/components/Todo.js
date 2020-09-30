import React, {Component} from 'react';
import Todoitem from './Todoitem.js';
import PropTypes from 'prop-types';

class Todo extends Component{
//function Todo() {
  render() {
    return this.props.todos.map((todo) => (
    //<h1>{todo.task}</h1>
    <Todoitem key = {todo.id} item = {todo}/>
    ));
  }
}

Todo.propTypes = {
  todos: PropTypes.array.isRequired
}

export default Todo;