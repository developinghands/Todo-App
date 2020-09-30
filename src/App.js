import React from 'react';
import Header from './components/layout/Header';
import Todo from './components/Todo';
import './App.css';

class App extends React.Component {
//function App() {
  state = {
    todos : [
        {
            id : 1,
            task : "Take out the trash",
            complete : false
        },
        {
            id : 2,
            task : "Dinner with wife",
            complete : false
        },          
        {
            id : 3,
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

render(){
  return (
    <div className="App">
    <Header/>
    <Todo todos = {this.state.todos} 
          markComplete = {this.markComplete}
          delete = {this.deleteTask}/>
    </div>
    );
  }
}
export default App;
