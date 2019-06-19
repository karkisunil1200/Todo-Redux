import React, {Component} from 'react';

class TodoForm extends Component {
  state = {
    newTodo: ''
  };
  render() {
    return (
      <div className='form'>
        <form>
          <input type='text' name='newTodo' onChange='handleChange' placeholder='Add to do' />
          <button>Add Me</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
