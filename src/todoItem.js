import React from 'react';
import './todoItem.css';

export default class TodoItem extends React.Component{
  removeTodo(id){
    this.props.removeTodo(id);
  }

  editTodo(id){
    this.props.editTodo(id);
  }

  render(){
    return(
      <div className='todoWrapper'>
        <input type='checkbox' />{this.props.todo.text}
        <button className='removeTodo' onClick={()=> this.removeTodo(this.props.id)}>Delete</button> 
      </div>
    )
  }
}
        // <button className='removeTodo' onClick={()=> this.editTodo(this.props.id)}>Edit</button> 