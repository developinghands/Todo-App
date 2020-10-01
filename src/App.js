import React from 'react';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import Todo from './components/Todo';
import {v4} from 'uuid';
import './App.css';

class App extends React.Component {
//function App() {
  state = {
    todos : [
        {
            id : v4(),
            task : "Take out the trash",
            complete : false
        },
        {
            id : v4(),
            task : "Dinner with wife",
            complete : false
        },          
        {
            id : v4(),
            task : "Meeting hurdle call",
            complete : false
        }            
    ]
}  

// Toggle Task Completion

markComplete = (id) => {
  this.setState({
    todos: this.state.todos.map(todoItem =>{
      if(todoItem.id === id){
        todoItem.complete = !todoItem.complete
      }
      return todoItem;
    })
  });
}

// Delete Task
deleteTask = (id) => {
  this.setState({
    todos: [...this.state.todos.filter(todoItem => todoItem.id !== id)]
  });
}

// Add Task
addTodo = (title) => {
  const newTodo = {
    id: v4(),
    task: title,
    complete: false,
  }
  this.setState({
    todos: [...this.state.todos, newTodo]
  });
}

render(){
  return (
    <div className="App">
    <Header/>
    <AddTodo getTitle={this.addTodo} />
    <Todo todos = {this.state.todos} 
          markComplete = {this.markComplete}
          delete = {this.deleteTask}/>
    </div>
    );
  }
}
export default App;
