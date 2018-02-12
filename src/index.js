import React from 'react';
import {render} from 'react-dom';
import Header from './header';
import './App.css';
import TodoInput from './todo_input.js';
import TodoItem from './todoItem.js';



class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      todos: [
        {id:0, text:"make food"},
        {id:1, text:"make food"},
        {id:2, text:"make food"} 
      ],
      nextId: 3
    };

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);

  }
  addTodo(todoText){
    let todos = this.state.todos.slice();
    todos.push({id: this.state.nextId, text: todoText});
    this.setState({
      todos: todos,
      nextId: this.state.nextId + 1
    });
    console.log(this.state.nextId);
  }

  removeTodo(id){
    this.setState({
      todos: this.state.todos.filter((todo, index)=> todo.id !== id)
    });
  }

  render(){
    return(
      <div className='App'>
        <div className='todo-wrapper'>
          <Header/>
          <TodoInput todoText="" addTodo={this.addTodo}/>
          <ul>{
            this.state.todos.map((todo)=> {
              return <TodoItem todo={todo} id={todo.id} removeTodo={this.removeTodo} />
            })
          }
          </ul>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
