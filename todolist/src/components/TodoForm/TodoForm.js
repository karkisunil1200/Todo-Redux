import React, {Component} from 'react';
import {addNewTodo} from '../../actions/index';
import {connect} from 'react-redux';

class TodoForm extends Component {
  state = {
    newTodo: ''
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  addTodo = event => {
    event.preventDefault();
    this.props.addNewTodo(this.state.newTodo);
    this.setState({
      newTodo: ''
    });
  };

  render() {
    return (
      <div className='form'>
        <form onSubmit={this.addTodo}>
          <input
            type='text'
            name='newTodo'
            value={this.state.newTodo}
            onChange={this.handleChange}
            placeholder='Add to do'
            required
          />
          <button>Add Me</button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  {addNewTodo}
)(TodoForm);
