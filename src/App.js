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
render(){
  return (
    <div className="App">
    <Todo todos = {this.state.todos} />
    </div>
    );
  }
}

export default App;
