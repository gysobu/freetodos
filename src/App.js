import React from 'react';
import TodoItem from './TodoItem'
import todosData from './todosData'
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(){
    super()
    this.state={
      todos:todosData
    }
  }
render() {
  const todoItemcomponents=this.state.todos.map(item=> 
    < TodoItem key={item.id} items={item}/>)
  return (
    <div className="todo-list">
      {todoItemcomponents}
    </div>
  )
  }
  
}

export default App;



