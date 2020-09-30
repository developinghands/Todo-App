import React from 'react';
import Todo from './components/Todo'
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
            id : 3,
            task : "Dinner with wife",
            complete : true
        },          
        {
            id : 4,
            task : "Meeting hurdle call",
            complete : false
        }            
    ]
}  

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

render(){
  return (
    <div className="App">
    <Todo todos = {this.state.todos} markComplete = {this.markComplete}/>
    </div>
    );
  }
}

export default App;
