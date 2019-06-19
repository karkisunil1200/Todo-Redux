import React from 'react';
import {deleteTodo} from '../../actions/index';
import {connect} from 'react-redux';

const Todo = props => {
  return (
    <div>
      <h2>
        <p>
          {props.task}
          <span onClick={() => props.deleteTodo(props.id)}>
            <i className='fas fa-trash-alt' />
          </span>
        </p>
      </h2>
    </div>
  );
};

const stateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  stateToProps,
  {deleteTodo}
)(Todo);
