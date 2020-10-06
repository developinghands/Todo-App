import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import Todo from './components/Todo';
import {v4} from 'uuid';
import About from './components/pages/About';
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
      <Router>
        <Header/>
        <Route exact path='/' render={props => (
          <React.Fragment>
            <AddTodo getTitle={this.addTodo} />
            <Todo todos = {this.state.todos} 
                  markComplete = {this.markComplete}
                  delete = {this.deleteTask}/>
          </React.Fragment>
        )}/>
        <Route path='/about' component={About} />
      </Router>
    </div>
    );
  }
}
export default App;
