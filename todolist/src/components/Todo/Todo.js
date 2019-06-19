import React from 'react';
import {deleteTodo, toggleTodo} from '../../actions/index';
import {connect} from 'react-redux';
import '../../App.css';

const Todo = props => {
  return (
    <div>
      <h2>
        <p onClick={() => props.toggleTodo(props.id)} className={props.complete && 'complete'}>
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
  {deleteTodo, toggleTodo}
)(Todo);
