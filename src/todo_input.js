import React from 'react';
import './todo_input.css';

export default class TodoInput extends React.Component{
  constructor(props){
    super(props);
    this.state = {value: this.props.TodoText}
    this.handleChange = this.handleChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  handleChange(e){
    this.setState({value: e.target.value})
  }

  addTodo(todo){
    if (todo.length > 0){
      this.props.addTodo(todo);
      this.setState({value: ' '});
    }
  }

  render(){
    return(
      <div>
        <input className='inputTask' type='text' value={this.state.value} onChange={this.handleChange} placeholder='ex. Make food'/>
        <button className='addInput' onClick={() => this.addTodo(this.state.value)}>Add</button>
      </div>
    )
  }
} 